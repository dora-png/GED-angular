import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as constante from '../../../../loader/constante';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { Droits, DroitsControllerService, GroupUser, GroupUserControllerService, PageDroits, PageGroupUser, PageProfiles, Profiles, UsersControllerService } from 'src/app/model';
import { SetDroitsComponent } from '../set-droits/set-droits.component';
import { SetProfilesComponent } from '../set-profiles/set-profiles.component';


@Component({
  selector: 'app-infos-group-user',
  templateUrl: './infos-group-user.component.html',
  styleUrls: ['./infos-group-user.component.scss']
})
export class InfosGroupUserComponent implements OnInit {


  newGroupFormGroup!: FormGroup;
  editable: boolean = false;
  edit : boolean = false;
  editGroup : boolean = false;
  editProfileList : boolean = false;
  editDroitList : boolean = false;
  loading: boolean = false;
  loadingProfile: boolean = false;
  loadingProfile1: boolean = false;
  loadingDroit: boolean = false;
  loadingDroit1: boolean = false;
  isEmpty: boolean = true;
  isPageDroitsEmpty: boolean = true;
  isPageProfilessEmpty: boolean = true;
  pageGroup!: PageGroupUser;
  pageProfiles!: PageProfiles;
  pageDroits!: PageDroits;
  private data!: GroupUser;
  groupUser!: GroupUser;
  private dataProfilesList: Profiles[]=[];
  profilesList: Profiles[]=[];
  valid: boolean= false;
  touched: boolean= false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiServiceGroup: GroupUserControllerService,
    private openDialogService: OpenDialogService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private auth: AuthenticationService
    ) {
      this.newGroupFormGroup = this.formBuilder.group(
        {
          name: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
          sigle: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(3)]),
        }
      );
    }

    ngOnInit(): void {
      let id: number = this.route.snapshot.params['id'];
      this.editable = this.onHasRole(constante.admin);
      this.initData(id);
    }

    private onHasRole(role:string): boolean{
      return this.auth.getRoles(role);
    }

    onSetGroup(): boolean{
      this.editGroup = !this.editGroup;
      return this.editGroup;
    }

    get f(): { [key: string]: AbstractControl } {
      return this.newGroupFormGroup.controls;
    }

    private initData(id: number){
      this.loading = true;
      this.apiServiceGroup.findGroupUserById(id).subscribe(
        response=>{
          if(response==null){
            this.toastr.info("GroupUser don't exit","Infos");
            this.router.navigate(["manage/security"]);
          }else{
            this.isEmpty=false;
            this.data = response;
            this.f["name"].setValue(this.data.name!);
            this.f["sigle"].setValue(this.data.sigle!);
            this.groupUser = this.getGroup();
            this.loading = false;
            this.getDroitsList(0,5);
            this.getProfilesList(0,5);
          }
        },
        error=>{
          this.loading = false;
          this.toastr.info(error.error.message, "Infos");
        }
      );
    }

    onChangeInput(event: any){
      if(this.isEmpty==false && this.newGroupFormGroup.valid){
       // this.valid = true;
      }else{
        //this.valid = false;
      }
    }

    changePageAndSizeDroit(event: {page: number, size: number}){
      this.pageSwitchDroit(event.page, event.size);
    }

    changePageAndSizeProfile(event: {page: number, size: number}){
      this.pageSwitchProfile(event.page, event.size);
    }

    private pageSwitchDroit(page:number, size:number){
      this.loadingDroit1 = true;
      this.apiServiceGroup.findAllDroitInGroupUser(this.data.idgroupes!,page,1,size).subscribe(
        resp=>{
          if(resp != null){
            this.isPageDroitsEmpty = false;
            this.pageDroits = resp;
            this.loadingDroit1 = false;
          }else{
            this.isPageDroitsEmpty = true;
            this.loadingDroit1 = false;

          }
        },error=>{
          this.isPageDroitsEmpty = true;
        }
      );
    }

    private pageSwitchProfile(page:number, size:number){
      this.loadingProfile1 = true;
      this.apiServiceGroup.findAllProfileInGroupUser(this.data.idgroupes!,1,page,size).subscribe(
        resp=>{
          if(resp != null){
            this.isPageProfilessEmpty = false;
            this.pageProfiles = resp;
            this.loadingProfile1 = false;
          }else{
            this.isPageProfilessEmpty = true;
            this.loadingProfile1 = false;

          }
        },error=>{
          this.isPageProfilessEmpty = true;
        }
      );
    }

  private getDroitsList(page:number, size:number) {
    this.loadingDroit = true;
    this.apiServiceGroup.findAllDroitInGroupUser(this.data.idgroupes!,1,page,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageDroitsEmpty = false;
          this.pageDroits = resp;
          this.loadingDroit = false;
        }else{
          this.isPageDroitsEmpty = true;
          this.loadingDroit = false;

        }
      },error=>{
        this.isPageDroitsEmpty = true;
      }
    );
  }

  private getProfilesList(page:number, size:number) {
    this.loadingProfile = true;
    this.apiServiceGroup.findAllProfileInGroupUser(this.data.idgroupes!,1,page,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageProfilessEmpty = false;
          this.pageProfiles = resp;
          this.loadingProfile = false;
        }else{
          this.isPageProfilessEmpty = true;
          this.loadingProfile = false;

        }
      },error=>{
        this.isPageProfilessEmpty = true;
        this.loadingProfile = false;
      }
    );
  }

  private getProfilesListData(): Profiles[] {
    return this.dataProfilesList;
  }

  private getGroup(): GroupUser {
    return this.data;
  }

  setSatus(){
    this.groupUser.status = !this.groupUser.status;
  }

  onTouch(){
    this.touched = true;
  }

  onValidData() :boolean{
    if(this.newGroupFormGroup.valid){
      return true;
    }
    return false;
  }

  setDroit(){
    this.openDialogService.openDialog(SetDroitsComponent, this.data.idgroupes!)
                            .afterClosed()
                            .subscribe(result => {
                              this.getDroitsList(0,5);
                            });
  }

  setProfile(){
    this.openDialogService.openDialog(SetProfilesComponent, this.data.idgroupes!)
      .afterClosed()
      .subscribe(result => {
        this.getProfilesList(0,5);
      });

  }

  private updateGroupUser(body: GroupUser){
    this.apiServiceGroup.updateGroupUser(body).subscribe(
      response=>{
        this.toastr.success("", "Uptated");
        this.router.navigate(['/manage/security']);

      }, error=>{
        this.toastr.error(error.error.message, "Error");
      }

    );
  }

  onSave(){
    this.groupUser.name = this.f["name"].value;
    this.groupUser.sigle = this.f["sigle"].value;
    let body: GroupUser =this.groupUser;
    this.updateGroupUser(body);

  }


  t: string = "aaaaaaaaaaaaaa";
  toto(): string{
    this.to();
    return this.t;
  }
  private to(){
    setTimeout(
      ()=>{
this.t="ella";
      },5000
    )
  }

}
