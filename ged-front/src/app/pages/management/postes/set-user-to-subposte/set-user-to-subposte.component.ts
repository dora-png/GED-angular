import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable, of } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { PageProfiles, Postes, Profiles, UsersControllerService } from 'src/app/model';
import { LogPosteUserControllerService } from 'src/app/model/api/logPosteUserController.service';
import { PosteControllerService } from 'src/app/model/api/posteController.service';

@Component({
  selector: 'app-set-user-to-subposte',
  templateUrl: './set-user-to-subposte.component.html',
  styleUrls: ['./set-user-to-subposte.component.scss']
})
export class SetUserToSubposteComponent implements OnInit {

  isEmpty: boolean = true;
  clicked: boolean= false;
  loading: boolean = false;
  loadingPage: boolean = false;
  research: boolean = false;
  view: boolean = false;
  currentProfile!: Profiles;
  private dataProfile!: Profiles;
  private valueToSearch!: string;
  posteName: string = "";
  pageProfiles!: PageProfiles;

   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Postes,  
    private apiServiceLogPosteUser: LogPosteUserControllerService,
    private apiUsersService: UsersControllerService,
    private apiService: PosteControllerService,    
    private toastr: ToastrService,
    private dialogRef:  MatDialogRef<SetUserToSubposteComponent>
    ) {
      this.posteName = this.data.name!;
     }

    ngOnInit(): void {
      this.loading = true;
     this.initData();
    }

    private findAllUser(page?: number, size?: number){
      this.apiUsersService.findAllProfiles(1,page,size).subscribe(
        resp=>{
          if(resp==null){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
            this.pageProfiles=resp;
          }
          this.loading = false;
        },
        error=>{
          this.loading = false;
          this.toastr.info("Check your internet connexion", "Infos");
        }
      );
    }

    private pageSwitch(page?: number, size?: number){      
      this.loadingPage = true;
      this.apiUsersService.findAllProfiles(1,page,size).subscribe(
        resp=>{
          if(resp==null){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
            this.pageProfiles=resp;
          }
          this.loadingPage = false;
          this.clicked = false;
        },
        error=>{
          this.clicked = false;
          this.loadingPage = false;
          this.toastr.info("Check your internet connexion", "Infos");
        }
      );
    }

    private pageSwitchNotEmpty(listUserId: number, page?: number, size?: number){      
      this.loadingPage = true;
      this.apiUsersService.findAllProfilesToAddInPoste(listUserId,page,size).subscribe(
        resp=>{
          if(resp==null){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
            this.pageProfiles=resp;
          }
          this.loadingPage = false;
          this.clicked = false;
        },
        error=>{
          this.clicked = false;
          this.loadingPage = false;
          this.toastr.info("Check your internet connexion", "Infos");
        }
      );
    }

    private findAllUserNotIn(listUserId: number, page?: number, size?: number){
      this.apiUsersService.findAllProfilesToAddInPoste(listUserId,page,size).subscribe(
        resp=>{
          if(resp==null){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
            this.pageProfiles=resp;
          }
          this.loading = false;
        },
        error=>{
          this.toastr.info(error.error.message, "Infos");
        }
      );
    }
    
    private initData(){
      this.apiServiceLogPosteUser.currentUserOfPoste(this.data!.idposte!).subscribe(
        resp=>{
          if(resp != null){
            this.dataProfile = resp;
            this.currentProfile = this.getCurrentProfile();
            this.findAllUserNotIn(resp.idProfiles!,0,5);
          }else{
            this.findAllUser(0,5);
          }
        },
        error=>{          
          this.loading=false;
          this.toastr.info("Check your internet", "Infos");
        }
      );
    }

    private getData(){
      this.loadingPage=true,
      this.apiServiceLogPosteUser.currentUserOfPoste(this.data!.idposte!).subscribe(
        resp=>{
          if(resp != null){
            this.dataProfile = resp;
            this.currentProfile = this.getCurrentProfile();
            this.pageSwitchNotEmpty(resp.idProfiles!,0,5);
          }else{
            this.pageSwitch(0,5);
          }
        },
        error=>{          
          this.loadingPage=false;
          this.toastr.info("Check your internet", "Infos");
        }
      );
    }
    
    private getCurrentProfile(): Profiles{
      return this.dataProfile;
    }
    
  
  changePageAndSize(event: {page: number, size: number}){

    if(this.dataProfile==null){
      this.pageSwitch(event.page, event.size);
    }else{
      this.pageSwitchNotEmpty(this.dataProfile.idProfiles!, event.page, event.size);

    }    
  }

  addProfile(profile: Profiles){
    this.clicked = true;
    this.apiService.addUser(this.data.idposte!, profile.idProfiles!).subscribe(
      response=>{
        this.getData();
      },
      error=>{
        this.clicked = false;
        this.loadingPage=false;
        this.toastr.error("Check your internet", "Infos");
      }
    );
  }

  onClose(){
    this.dialogRef.close(this.currentProfile);
  }

  save(){
    this.dialogRef.close(this.dataProfile);
  }

  containProfile(profile: Profiles){
    return profile.name === this.currentProfile.name;
  }


}
