import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { UsersControllerService, Profiles, GroupUserControllerService, PageGroupUser, GroupUser, StructureControllerService, PageStructures, Structures  } from 'src/app/model';
import { ProfilGroupComponent } from '../profil-group/profil-group.component';
import { ProfilStructureComponent } from '../profil-structure/profil-structure.component';
import { ProfilUserComponent } from '../profil-user/profil-user.component';

interface TypeProfile {
  value: string;
  name: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  newProfileFormGroup!: FormGroup;
  clickedOnSetUser: boolean= false;
  clicked: boolean= false;
  isEmpty: boolean= true;
  isEmptyGroup: boolean= true;
  valid: boolean= false;
  touched: boolean= false;
  selectedValue: string | undefined;
  userLists!: string[];
  groupUser!:GroupUser;  
  structure!:Structures;
  currentUser: string = "None" ;
  loading: boolean = true;
  typeProfiles: TypeProfile[] = [
    {value: Profiles.TypeprofilEnum.EXTERNACTOR, name: "Utilisateur Externe"},
    {value: Profiles.TypeprofilEnum.INTERNACTOR, name: "Utilisateur Interne"},
  ];
  constructor(
    private loaderService: LoaderService, 
    private toastr: ToastrService,
    private apiService: UsersControllerService,
    private openDialogService: OpenDialogService,
    private formBuilder: FormBuilder,    
    private router: Router
  ) { 
    this.newProfileFormGroup = formBuilder.group(
      {
        name: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      }
    );
  }

  ngOnInit(): void {   
    this.groupUser = this.initGroup();
    this.structure = this.initStructure();
    this.currentUser = this.initUser();
  }

  setStructure(){
    this.openDialogService.openDialog(ProfilStructureComponent, this.structure)
    .afterClosed()
    .subscribe(result => {
      if(result != null){
        this.structure = result;                                
      }else{
        this.structure = this.initStructure();
      }
    });
  }
  
  setUser(){
    this.openDialogService.openDialog(ProfilUserComponent, this.currentUser)
    .afterClosed()
    .subscribe(result => {
      if(result != null){
        this.currentUser = result;                                
      }else{
        this.currentUser = this.initUser();
      }
    });
  }
  private initUser(): string {
    return 'Empty'
  }

  private initGroup():GroupUser{
    return{
        idgroupes:0,
        dateCreation: undefined,
        name: undefined,
        sigle: undefined,
        status: undefined,
    };
  }

  setGroup(){    
    this.openDialogService.openDialog(ProfilGroupComponent, this.groupUser)
                            .afterClosed()
                            .subscribe(result => {
                              if(result != null){
                                this.groupUser = result;                                
                              }else{
                                this.groupUser = this.initGroup();
                              }
                            });
  }

  private initStructure():Structures{
    return{
        idstructure:0,
        dateCreation: undefined,
        name: undefined,
        sigle: undefined,
        active: undefined,
        color: undefined,
        description: undefined,
        postes: undefined,
        profiles: undefined,
        sousStructure: undefined,
        structureSuperieur: undefined,
    };
  }

  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  changePageAndSize(event: any){
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.newProfileFormGroup.controls;
  }

  private initProfileBean(): Profiles{
    return {
      name: undefined,
      currentUser: undefined,
      typeprofil: undefined,
      status: undefined,
      dateCreation: undefined,
      idProfiles: undefined,
      structure: undefined
    };
  }

  
  

  private addProfile(body: Profiles){
    this.apiService.addUsers(body =body, this.structure!.idstructure!, this.groupUser.idgroupes! ).subscribe(
      response => {
        this.toastr.success("true","Create");
        this.router.navigate(['manage/users']);
        this.clicked = false;
      },
      error => {
        console.log(error)
        this.toastr.info("Profile create without group user","Warning");
        this.clicked = false;
        this.router.navigate(['manage/users']);
      }
    );
  }
  saveProfile(){
    this.clicked=true;
    let body: Profiles=this.initProfileBean();
    body.name = this.f["name"].value;
    body.currentUser = this.currentUser;
    if(this.selectedValue === Profiles.TypeprofilEnum.EXTERNACTOR){
      body.typeprofil = Profiles.TypeprofilEnum.EXTERNACTOR;
      this.addProfile(body);
    }else if(this.selectedValue === Profiles.TypeprofilEnum.INTERNACTOR){
      body.typeprofil = Profiles.TypeprofilEnum.INTERNACTOR;
      this.addProfile(body);
    }else{
      this.clicked = false;
    }
  }

  onTouch(){
    this.touched = true;
  }

  onValidData() :boolean{
    if(this.newProfileFormGroup.valid){
      if(this.structure.idstructure != this.initStructure().idstructure){
        if(this.currentUser != this.initUser()){
          if(this.groupUser.idgroupes != this.initGroup().idgroupes){
            return true;
          }
        }
      }
    }
    return false;
  }

  onChange(event: string){
    this.isEmpty = false;
    this.selectedValue = event;
    if(this.newProfileFormGroup.valid){
      this.valid = true;
    }
  }

  onChangeInput(event: any){
    if(this.isEmpty==false && this.newProfileFormGroup.valid){
      this.valid = true;
    }else{
      this.valid = false;
    }
  }

  
}
