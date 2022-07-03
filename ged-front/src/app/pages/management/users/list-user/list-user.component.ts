import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { LogPosteUserControllerService, PageUsers, Users, UsersControllerService } from 'src/app/model';
import { ProfilComponent } from '../profil/profil.component';
export interface UserPoste {
  idUser?: number,
  loginUser?: string,
  nameUser?: string,
  idPoste?: number,
  namePoste?: string,
  direction?: string
} 

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  pageUsers!: PageUsers;
  userList: UserPoste[] = [];
  isEmpty: boolean = true;
  loading: boolean = false;
  research: boolean = false;
  view: boolean = false;
  private valueToSearch!: string;
  searchBy: 'name' | 'login' | undefined;
  private pagesize ={page: 0, size: 5};


  constructor(
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiService: UsersControllerService,
    private apiLogService: LogPosteUserControllerService,      
    private toastr: ToastrService
    ) { }

    ngOnInit(): void {
      this.initData(0,5);
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
      this.apiService.findAll1(page, size).subscribe(
        response=>{
          if(response==null){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
            this.pageUsers=response;
            this.pageUsers.content?.forEach( user=>{
              this.listenToLoading();
              this.apiLogService.currentPosteOfUser(user.iduser!).subscribe(
                    resp=>{
                      if(resp==null){
                        this.userList.push(
                          {
                            idPoste:undefined,
                            idUser:user.iduser!,
                            namePoste:"None",
                            loginUser:user.username!,
                            nameUser:user.name!,
                            direction:"None"
                          }
                        );
                      }else{
                        this.userList.push(
                          {
                            idPoste:resp.idposte!,
                            idUser:user.iduser!,
                            namePoste:resp.name!,
                            loginUser:user.username!,
                            nameUser:user.name!,
                            direction: resp.structure!.sigle!
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

    openDialogProfil(user: UserPoste) {
      let data = {
        user:user.idUser,
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
    this.apiService.searchByName1(name,page,size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageUsers=response;
          this.pageUsers.content?.forEach( user=>{
            this.apiLogService.currentPosteOfUser(user.iduser!).subscribe(
                  resp=>{
                    if(resp==null){
                      this.userList.push(
                        {
                          idPoste:undefined,
                          idUser:user.iduser!,
                          namePoste:"None",
                          loginUser:user.username!,
                          nameUser:user.name!,
                          direction:"None"
                        }
                      );
                    }else{
                      this.userList.push(
                        {
                          idPoste:resp.idposte!,
                          idUser:user.iduser!,
                          namePoste:resp.name!,
                          loginUser:user.username!,
                          nameUser:user.name!,
                          direction: resp.structure!.sigle!
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
  
  private changePageOrSizeSearchByLogin(login: string, page: number, size: number){
    this.listenToLoading();
    this.apiService.searchByLogin(login,page,size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageUsers=response;
          this.pageUsers.content?.forEach( user=>{
            this.apiLogService.currentPosteOfUser(user.iduser!).subscribe(
                  resp=>{
                    if(resp==null){
                      this.userList.push(
                        {
                          idPoste:undefined,
                          idUser:user.iduser!,
                          namePoste:"None",
                          loginUser:user.username!,
                          nameUser:user.name!,
                          direction:"None"
                        }
                      );
                    }else{
                      this.userList.push(
                        {
                          idPoste:resp.idposte!,
                          idUser:user.iduser!,
                          namePoste:resp.name!,
                          loginUser:user.username!,
                          nameUser:user.name!,
                          direction: resp.structure!.sigle!
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
      }else if(this.searchBy =="login"){       
        this.changePageOrSizeSearchByLogin(this.valueToSearch!, event.page, event.size);
      }else{
        this.toastr.error("err.error.message", "Error +err.status");
      }

    }  
  }
 
  private searchName(name: string){
    this.listenToLoading();
    this.apiService.searchByName1(name).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageUsers=response;
          this.pageUsers.content?.forEach( user=>{
            this.apiLogService.currentPosteOfUser(user.iduser!).subscribe(
                  resp=>{
                    if(resp==null){
                      this.userList.push(
                        {
                          idPoste:undefined,
                          idUser:user.iduser!,
                          namePoste:"None",
                          loginUser:user.username!,
                          nameUser:user.name!,
                          direction:"None"
                        }
                      );
                    }else{
                      this.userList.push(
                        {
                          idPoste:resp.idposte!,
                          idUser:user.iduser!,
                          namePoste:resp.name!,
                          loginUser:user.username!,
                          nameUser:user.name!,
                          direction: resp.structure!.sigle!
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

  private searchLogin(login: string){
    this.listenToLoading();
    this.apiService.searchByLogin(login).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageUsers=response;
          this.pageUsers.content?.forEach( user=>{
            this.apiLogService.currentPosteOfUser(user.iduser!).subscribe(
                  resp=>{
                    if(resp==null){
                      this.userList.push(
                        {
                          idPoste:undefined,
                          idUser:user.iduser!,
                          namePoste:"None",
                          loginUser:user.username!,
                          nameUser:user.name!,
                          direction:"None"
                        }
                      );
                    }else{
                      this.userList.push(
                        {
                          idPoste:resp.idposte!,
                          idUser:user.iduser!,
                          namePoste:resp.name!,
                          loginUser:user.username!,
                          nameUser:user.name!,
                          direction: resp.structure!.sigle!
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
      }else if(this.searchBy =="login"){        
        this.searchLogin(this.valueToSearch);
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
