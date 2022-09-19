import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GroupUserControllerService, PageProfiles, Profiles } from 'src/app/model';

@Component({
  selector: 'app-set-profiles',
  templateUrl: './set-profiles.component.html',
  styleUrls: ['./set-profiles.component.scss']
})
export class SetProfilesComponent implements OnInit {

  profilePage!: PageProfiles;  
  currentProfilesPage!: PageProfiles;  
  isProfilesPageEmpty: boolean = false;
  valid: boolean= true;
  isEmpty: boolean = false;
  isPageCurrentProfilesEmpty: boolean = true;
  isPageProfilesEmpty: boolean = true;
  loading: boolean = true;
  loadingCurrentProfiles: boolean = true;
  loadingProfilesToAdd: boolean = true;
  valueToSearch: string = "";
  valueToSearchCurrentProfile: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private apiServiceGroup: GroupUserControllerService,
    private toastr: ToastrService,
    private dialogRef:  MatDialogRef<SetProfilesComponent>
  ) { }

  ngOnInit(): void {
    this.init(); 
  }

  private init() {
    this.loading = true;
    this.apiServiceGroup.findGroupUserById(this.data).subscribe(
      response=>{
        if(response==null){
          this.toastr.info("GroupUser don't exit","Infos");
          this.dialogRef.close();
        }else{
          this.isEmpty=false;  
          this.loading = false;
          this.initCurrentProfiles(0,5);
          this.initProfilesToAdd(0,5);
        }
      },
      error=>{
        this.loading = false;
        this.toastr.info(error.error.message, "Infos");
        this.dialogRef.close();
      }
    );
  }
  
  private initCurrentProfiles(page: number, size: number){
    this.loadingCurrentProfiles = true;
    this.apiServiceGroup.findAllProfileInGroupUser(this.data,1,page,size).subscribe(
      resp=>{
        console.log(resp)
        if(resp != null){          
          this.isPageCurrentProfilesEmpty = false;
          this.currentProfilesPage = resp;
          this.loadingCurrentProfiles = false;
        }else{
          this.isPageCurrentProfilesEmpty = true;
          this.loadingCurrentProfiles = false;          
        }
      },error=>{
        this.isPageCurrentProfilesEmpty = true;
        this.loadingCurrentProfiles = false; 
      }
    );
  }
  
  private initProfilesToAdd(page: number, size: number) {
    this.loadingProfilesToAdd = true;
    this.apiServiceGroup.findAllProfilesToAddInGroupUser(this.data,page,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageProfilesEmpty = false;
          this.profilePage = resp;
          this.loadingProfilesToAdd = false;
        }else{
          this.isPageProfilesEmpty = true;
          this.loadingProfilesToAdd = false;          
        }
      },error=>{
        this.isPageProfilesEmpty = true;
        this.loadingProfilesToAdd = false;
      }
    );
  }

  private getCurentProfiles(page: number, size: number) { 
    this.loadingCurrentProfiles = true;
    this.apiServiceGroup.findAllProfileInGroupUser(this.data,1,page,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageCurrentProfilesEmpty = false;
          this.currentProfilesPage = resp;
          this.loadingCurrentProfiles = false;
        }else{
          this.isPageCurrentProfilesEmpty = true;
          this.loadingCurrentProfiles = false;          
        }
      },error=>{
        this.isPageCurrentProfilesEmpty = true;
        this.loadingCurrentProfiles = false; 
      }
    );
  }
  
  private getProfilesToAdd(page: number, size: number) {
    this.loadingProfilesToAdd = true;
    this.apiServiceGroup.findAllProfilesToAddInGroupUser(this.data,page,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageProfilesEmpty = false;
          this.profilePage = resp;
          this.loadingProfilesToAdd = false;
        }else{
          this.isPageProfilesEmpty = true;
          this.loadingProfilesToAdd = false;          
        }
      },error=>{
        this.isPageProfilesEmpty = true;
        this.loadingProfilesToAdd = false;
      }
    );
  }

  private searchCurrentProfilesByName(name: string, page: number, size: number, status: number){
    this.loadingCurrentProfiles = true;
    this.apiServiceGroup.findAllProfileInGroupUserByName(this.data,name,1,page,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageCurrentProfilesEmpty = false;
          this.currentProfilesPage = resp;
          this.loadingCurrentProfiles = false;
        }else{
          this.isPageCurrentProfilesEmpty = true;
          this.loadingCurrentProfiles = false;
        }
      },error=>{
        this.isPageCurrentProfilesEmpty = true;
        this.loadingCurrentProfiles = false;
      }
    );
  }

  private searchProfilesByName(name: string, page: number, size: number){    
    this.loadingProfilesToAdd = true;
    this.apiServiceGroup.findAllProfilesToAddInGroupUserByName(this.data,name,page,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageProfilesEmpty = false;
          this.profilePage = resp;
          this.loadingProfilesToAdd = false;
        }else{
          this.isPageProfilesEmpty = true;
          this.loadingProfilesToAdd = false;
        }
      },error=>{
        this.isPageProfilesEmpty = true;
        this.loadingProfilesToAdd = false;
      }
    );
  }

  private pageSwitchCurrentProfile(page: number, size: number){
    if(this.valueToSearchCurrentProfile.trim() == ""){
      this.getCurentProfiles(page,size);
    }else{
      this.searchCurrentProfilesByName(this.valueToSearchCurrentProfile.trim(), page, size, 1);

    }
  }

  private pageSwitchProfilesToAdd(page: number, size: number){
    if(this.valueToSearch.trim() == ""){
      this.getProfilesToAdd(page,size);
    }else{
      this.searchProfilesByName(this.valueToSearch.trim(), page, size);

    }
  }

  onExit(){
    this.dialogRef.close();
  }

  searchCurrentProfile(){
    this.pageSwitchCurrentProfile(0,5);
  }

  search(){
    this.pageSwitchProfilesToAdd(0,5);
  }
  
  changePageAndSize(event: {page: number, size: number}){
    this.pageSwitchProfilesToAdd(event.page, event.size);
  }
  
  changePageAndSizeCurrentProfile(event: {page: number, size: number}){    
    this.pageSwitchCurrentProfile(event.page, event.size);
  }
  
  
  addProfile(profile: Profiles){
    this.loading = true;
    this.apiServiceGroup.addProfileToGroupUser(this.data, profile.idProfiles!).subscribe(
      response=>{
          this.toastr.success("Profile "+profile.name! +" Ajouter", "OK");
          this.init();
      },
      error=>{
        this.loading = false;
        this.toastr.error("Verifier votre connexion", "KO");
      }
    )      
  }
    
    removeProfile(profile: Profiles){  
      this.loading = true;
      this.apiServiceGroup.removeProfileToGroupUser(this.data, profile.idProfiles!).subscribe(
        response=>{
            this.toastr.success("Profile "+profile.name! +" Retirer", "OK");
            this.init();
        },
        error=>{
          this.loading = false;
          this.toastr.error("Verifier votre connexion", "KO");
        }
      );
    }




}
