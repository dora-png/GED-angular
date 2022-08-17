import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { PageProfiles, UsersControllerService } from 'src/app/model';
import { AddRemoveDroitComponent } from '../add-remove-droit/add-remove-droit.component';
import { AddRemoveInGroupComponent } from '../add-remove-in-group/add-remove-in-group.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { ProfilComponent } from '../profil/profil.component';
import { UpdateNameComponent } from '../update-name/update-name.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
export interface UserPoste {  
  idStructure?: number,
  idProfile?: number,
  profileName?: string,
  userName?: string,
  status?: boolean,
  directionName?: string,
  directionSigle?: string
} 

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  pageUsers!: PageProfiles;
  userList: UserPoste[] = [];
  isEmpty: boolean = false;
  loading: boolean = true;
  research: boolean = false;
  view: boolean = false;
  private valueToSearch!: string;
  searchBy: 'name' | undefined;
  private pagesize ={page: 0, size: 5};


  constructor(
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiService: UsersControllerService,    
    private toastr: ToastrService
    ) { }

    ngOnInit(): void {
     // setTimeout(()=>{
        this.initData(0,5);
    //  }, 5000)
      
    }

    newProfile(){
      this.openDialogService.openDialog(AddUserComponent)
                            .afterClosed()
                            .subscribe(result => {
                              if(result){
                                this.refresf();
                              }
                            });
    }
  
    private listenToLoading(): void {
      this.loaderService.getSub
        .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
        .subscribe((loading) => {
          this.loading = loading;
        });
    }

    private initData(page: number, size: number){
      this.listenToLoading();
      this.userList=[];
      this.apiService.findAllProfiles(page, size).subscribe(
        response=>{
          if(response==null){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
            this.pageUsers=response;
            this.pageUsers.content?.forEach( user=>{
            this.listenToLoading();
            this.apiService.currentStructure(user.idProfiles!).subscribe(
              resp=>{
                if(user.currentUser==null)
                  user.currentUser = "empty";
                if(resp==null){
                  this.userList.push(
                    {
                      idStructure: undefined,
                      idProfile:user.idProfiles!,
                      profileName:user.name!,
                      userName: user.currentUser!,
                      status: user.status!,
                      directionName: "undefined",
                      directionSigle: "undefined"
                    }
                  );
                }else{
                  this.userList.push(
                    {
                            idStructure: resp.idStructure!,
                            idProfile:user.idProfiles!,
                            profileName:user.name!,
                            userName: user.currentUser!,
                            status: user.status!,
                            directionName: resp.name!,
                            directionSigle: resp.sigle!
                          }
                        );
                      }
                    },
                    error=>{  
                    }
                );
              }
            );
          }
        },
        error=>{
        }
      );
    }

    setSatus(user: UserPoste) {
      this.listenToLoading();
      this.apiService.setProfileStatus(user.idProfile!).subscribe(
        response =>{
          let index: number = this.userList.findIndex(users => users.idProfile ===user.idProfile);
          this.userList[index].status = !this.userList[index].status;

        },
        error=>{

        }
      )
    }
    
   /* openDialogProfilDroit(user: UserPoste) {
      this.openDialogService.openDialog(AddRemoveDroitComponent, user.idProfile);
    }*/

    openDialogUpdateName(user: UserPoste){
      let profileInfos = {
        idProfile: user.idProfile,
        nameProfile: user.profileName
      }
      this.openDialogService.openDialog(UpdateNameComponent, profileInfos)
                            .afterClosed()
                            .subscribe(result => {
                              if(result){
                                this.refresf();
                              }
                            });
    }

    openDialogUpdateUser(user: UserPoste){
      let profileInfos = {
        idProfile: user.idProfile,
        userNameProfile: user.userName
      }
      this.openDialogService.openDialog(UpdateUserComponent, profileInfos)
                            .afterClosed()
                            .subscribe(result => {
                              if(result){
                                this.refresf();
                              }
                            });
    }

    openDialogGroupProfil(user: UserPoste) {
      this.openDialogService.openDialog(AddRemoveInGroupComponent, user.idProfile);
    }

    openDialogProfil(user: UserPoste) {
      let data = {
        user:user.idProfile,
        editable:false
      }
      this.openDialogService.openDialog(ProfilComponent, data);
    }
    
  private changePageOrSize(page: number, size: number){
    this.listenToLoading();    
    this.initData(page,size);
  }

  private changePageOrSizeSearchByName(name: string, page: number, size: number){
    this.listenToLoading();
    this.apiService.searchUsersByName(name,page,size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageUsers=response;
          this.pageUsers.content?.forEach( user=>{
            if(user.currentUser==null)
              user.currentUser = "empty";
            this.apiService.currentStructure(user.idProfiles!).subscribe(
              resp=>{
                if(resp==null){
                  this.userList.push(
                    {
                      idStructure: undefined,
                      idProfile:user.idProfiles!,
                      profileName:user.name!,
                      userName: user.currentUser!,
                      status: user.status!,
                      directionName: "undefined",
                      directionSigle: "undefined"
                    }
                  );
                }else{
                  this.userList.push(
                    {
                      idStructure: resp.idStructure!,
                      idProfile:user.idProfiles!,
                      profileName:user.name!,
                      userName: user.currentUser!,
                      status: user.status!,
                      directionName: resp.name!,
                      directionSigle: resp.sigle!
                    }
                  );
                }
              },
              error=>{  
              }
          );
        }
          );
        }
      },
      error=>{

      }

    );
  }
  
  changePageAndSize(event: {page: number, size: number}){
    if(this.searchBy==null){
      this.changePageOrSize(event.page, event.size);
    }else{
      if(this.searchBy =="name"){
        this.changePageOrSizeSearchByName(this.valueToSearch!, event.page, event.size);
      }else{
        this.toastr.error("err.error.message", "Error +err.status");
      }

    }  
  }
 
  private searchName(name: string){
    this.listenToLoading();
    this.apiService.searchUsersByName(name).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageUsers=response;
          this.pageUsers.content?.forEach( user=>{
            if(user.currentUser==null)
              user.currentUser = "empty";
            this.apiService.currentStructure(user.idProfiles!).subscribe(
              resp=>{
                if(resp==null){
                  this.userList.push(
                    {
                      idStructure: undefined,
                      idProfile:user.idProfiles!,
                      profileName:user.name!,
                      userName: user.currentUser!,
                      status: user.status!,
                      directionName: "undefined",
                      directionSigle: "undefined"
                    }
                  );
                }else{
                  this.userList.push(
                    {
                      idStructure: resp.idStructure!,
                      idProfile:user.idProfiles!,
                      profileName:user.name!,
                      userName: user.currentUser!,
                      status: user.status!,
                      directionName: resp.name!,
                      directionSigle: resp.sigle!
                    }
                  );
                }
              },
              error=>{  
              }
          );
            }
          );
        }
      },
      error=>{

      }

    );
  }

  search(event: any){
    let searchValue: string =event.target.value;
    searchValue = searchValue.trim();
    this.userList = [];
    if(searchValue.length!>0){
      this.valueToSearch=searchValue;
      if(this.searchBy =="name"){
        this.searchName(this.valueToSearch);
      }else{
        this.toastr.error("err.error.message", "Error +err.status");
      } 
    }else{
      this.initData(0,5);
      this.research=false;
      this.searchBy = undefined;
    }
  }

    viewList(){
      this.view=!this.view;
  
    }
  
    refresf(){
      this.userList=[];
      this.initData(0,5);
    }
}
