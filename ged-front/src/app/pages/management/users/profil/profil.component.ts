import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import {  UsersControllerService, DroitsControllerService, Profiles, GroupUserControllerService, GroupUser } from 'src/app/model';
import * as constante from '../../../../loader/constante';
import { ProfilGroupComponent } from '../profil-group/profil-group.component';
import { ProfilStructureComponent } from '../profil-structure/profil-structure.component';
import { ProfilUserComponent } from '../profil-user/profil-user.component';
interface TypeProfile {
  value: string;
  name: string;
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  newProfileFormGroup!: FormGroup;
  editable: boolean = false;   
  edit : boolean = false; 
  loading: boolean = false;
  isEmpty: boolean = true;
  profiles!: Profiles;
  private data!: Profiles;
  groupUser!: GroupUser;
  private dataGroupUser!: GroupUser;
  valid: boolean= false;
  touched: boolean= false;
  typeProfiles: TypeProfile[] = [
    {value: Profiles.TypeprofilEnum.EXTERNACTOR, name: "Utilisateur Externe"},
    {value: Profiles.TypeprofilEnum.INTERNACTOR, name: "Utilisateur Interne"},
  ];


  constructor(  
    private loaderService: LoaderService,
    private route: ActivatedRoute,   
    private router: Router,  
    private apiService: UsersControllerService, 
    private apiServiceGroup: GroupUserControllerService,
    private openDialogService: OpenDialogService,
    private formBuilder: FormBuilder,  
    private toastr: ToastrService ,
    private auth: AuthenticationService
    ) { 
      this.newProfileFormGroup = this.formBuilder.group(
        {
          name: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
          typeprofile: new FormControl(null, Validators.required),
        }
      );      
    }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id'];
    this.editable = this.onHasRole(constante.admin);
    this.initData(id);
  }

  setUser(){
    this.openDialogService.openDialog(ProfilUserComponent, this.profiles.currentUser!)
    .afterClosed()
    .subscribe(result => {
      if(result != null){
        this.profiles.currentUser = result;                       
      }else{
      }
    });
  }

  private initUser(): string {
    return this.data.currentUser!;
  }

  private initGroup():GroupUser{
    return this.dataGroupUser;
  }

  setGroup(){    
    this.openDialogService.openDialog(ProfilGroupComponent, this.groupUser)
                            .afterClosed()
                            .subscribe(result => {
                              if(result != null){
                                this.groupUser = result;                    
                              }else{
                              }
                            });
  }


  get f(): { [key: string]: AbstractControl } {
    return this.newProfileFormGroup.controls;
  }

  onChangeInput(event: any){
    if(this.isEmpty==false && this.newProfileFormGroup.valid){
     // this.valid = true;
    }else{
      //this.valid = false;
    }
  }

  onSet(): boolean{
    this.edit = !this.edit;
    return this.edit;
  }

  private getProfiles(): Profiles{
    return this.data;
  }

  private onHasRole(role:string): boolean{
    return this.auth.getRoles(role);
  }

  setSatus(){
    this.profiles.status = !this.profiles.status;
  }


  private initGroupData():GroupUser{
    return this.dataGroupUser;
  }



  private initData(id: number){
    this.loading = true;
    this.apiService.findUserById(id).subscribe(
      response=>{
        if(response==null){
          this.toastr.info("Profiles don't exist", "Infos");
          this.router.navigate(["manage/users"]);

        }else{
          this.isEmpty=false;
          this.data = response;
          this.f["name"].setValue(this.data.name!);     
          this.f["typeprofile"].setValue(this.data.typeprofil!);
          this.profiles = this.getProfiles();
          this.apiServiceGroup.findGroupOfProfile(response.idProfiles!).subscribe(
            resp=>{
              if(resp==null){
                this.groupUser = this.initGroup();
              }else{
                this.dataGroupUser = resp;
                this.groupUser = this.initGroupData();
              }
              this.loading = false;
            },
            error=>{  
              this.loading = false;
            }
          );
        }
        
      },
      error=>{
        this.loading = false;
        this.toastr.info(error.error.message, "Infos");
        //this.dialogRef.close(false);
      }
    );
  }

  onTouch(){
    this.touched = true;
  }

  onValidData() :boolean{
    if(this.newProfileFormGroup.valid){
      if(this.profiles.currentUser != this.initUser()){
        return false;
      }
      if(this.groupUser.idgroupes != this.initGroup().idgroupes){
        return false;
      }
      return true;
    }
    return false;
  }

  private updateProfile(body: Profiles, idlastGroupUser: number, idgroupuser: number ){
    this.apiService.setProfile(body, idlastGroupUser, idgroupuser).subscribe(
      response=>{        
        this.toastr.success("", "Uptated");
        this.router.navigate(['/manage/users']);

      }, error=>{
        this.toastr.error(error.error.message, "Error");
      }

    );
  }

  onSave(){
    let body: Profiles =this.profiles;
    let idlastGroupUser: number = this.dataGroupUser.idgroupes!;
    let idgroupuser: number = this.groupUser.idgroupes!;
    if(this.f["typeprofile"].value === Profiles.TypeprofilEnum.EXTERNACTOR){
      body.typeprofil = Profiles.TypeprofilEnum.EXTERNACTOR;
      this.updateProfile(body, idlastGroupUser, idgroupuser);
    }else if(this.f["typeprofile"].value === Profiles.TypeprofilEnum.INTERNACTOR){
      body.typeprofil = Profiles.TypeprofilEnum.INTERNACTOR;
      this.updateProfile(body, idlastGroupUser, idgroupuser);
    }
    
  }
  onClose(){
   // this.dialogRef.close(this.editable);
  }

}
