import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable, of } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
//import { LogPosteUserControllerService, PageUsers, PosteControllerService, Postes, Users, UsersControllerService } from 'src/app/model';

@Component({
  selector: 'app-set-user-to-subposte',
  templateUrl: './set-user-to-subposte.component.html',
  styleUrls: ['./set-user-to-subposte.component.scss']
})
export class SetUserToSubposteComponent implements OnInit {
/*
  isEmpty: boolean = true;
  loading: boolean = false;
  research: boolean = false;
  view: boolean = false;
  currentUser: Users[] = [];
  listUser: Users[] = [];
  private valueToSearch!: string;
  searchBy: 'name' | 'login' | undefined;
  private pagesize ={page: 0, size: 5};
  posteName: string = "";
  pageUsers!: PageUsers;

   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Postes,
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiUsersService: UsersControllerService,   
    private apiServiceLogPosteUser: LogPosteUserControllerService,
    private apiService: PosteControllerService,    
    private toastr: ToastrService
    ) {
      this.posteName = this.data.name!;
     }
*/
     ngOnInit(): void {
      //this.listenToLoading();
      //this.initData();
    }
  /*
    private listenToLoading(): void {
      this.loaderService.getSub
        .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
        .subscribe((loading) => {
          this.loading = loading;
        });
    }

    private findAllUser(page?: number, size?: number){
      this.apiUsersService.findAll1(page,size).subscribe(
        resp=>{
          if(resp==null){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
            this.pageUsers=resp;
            this.listUser = resp!.content!;
          }
        },
        error=>{
          this.toastr.info(error.error.message, "Infos");
        }
      );
    }

    private findAllUserNotIn(listUserId: number, page?: number, size?: number){
      this.apiUsersService.listUserToAdd(listUserId,page,size).subscribe(
        resp=>{
          if(resp==null){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
            this.pageUsers=resp;
            this.listUser = resp!.content!;
          }
        },
        error=>{
          this.toastr.info(error.error.message, "Infos");
        }
      );
    }
    
    private initData(){
      this.currentUser = [];
      this.apiServiceLogPosteUser.currentUserOfPoste(this.data!.idposte!).subscribe(
        resp=>{
          this.currentUser.push(resp);
          this.findAllUserNotIn(resp.iduser!);
        },
        error=>{
          this.toastr.info(error.error.message, "Infos");
          this.findAllUser();
        }
      );
    }

    private initUser(): Users{
      return {
        iduser: undefined,
        username:undefined,
        name:undefined,
        password:undefined,
        dateCreation:undefined,
        status:undefined


      };
    }
    
  private changePageOrSize(page: number, size: number){
    this.listenToLoading();
    this.apiUsersService.findAll1(page, size).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageUsers=res;
          this.listUser = res!.content!;
        }
      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
      }
    );
  }

  private changePageOrSizeSearchByName(name: string, page: number, size: number){
    this.listenToLoading();
    this.apiUsersService.searchByName1(name, page, size).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageUsers=res;
          this.listUser = res!.content!;
        }
      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
      }
    );
  }
  
  private changePageOrSizeSearchByLogin(login: string, page: number, size: number){
    this.listenToLoading();
    this.apiUsersService.searchByLogin(login, page, size).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageUsers=res;
          this.listUser = res!.content!;
        }
      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
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
    this.apiUsersService.searchByName1(name).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initData();
        }else{
          this.research=false;
          this.pageUsers=res;
          this.listUser = res!.content!;
        }
      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
      }
    );
  }

  private searchLogin(name: string){
    this.listenToLoading();
    this.apiUsersService.searchByLogin(name).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initData();
        }else{
          this.research=false;
          this.pageUsers=res;
          this.listUser = res!.content!;
        }
      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
      }
    );
  }

  search(event: any){
    let searchValue: string =event.target.value;
    searchValue = searchValue.trim();
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
      this.initData();
      this.research=false;
      this.searchBy = undefined;
    }
  }

  viewList(){
    this.view=!this.view;

  }

  refresf(){
    this.listenToLoading();
    this.initData();
  }

  onDrop(event: CdkDragDrop<Users []>){
    if(event.previousContainer==event.container){
    }else{
      if(event.previousContainer.data == this.listUser ){
        console.log(this.listUser[event.previousIndex]);
        this.apiService.addUser(this.data.idposte!,this.listUser[event.previousIndex].iduser!).subscribe(
          response=>{
            this.toastr.success("ok", "Infos");
            this.refresf();
          },
          error=>{
            this.toastr.info(error.error.message, "Infos");
          }
        );
       //transferArrayItem(
         // this.listUser,
         // this.currentUser,
         // event.previousIndex,
         // event.currentIndex
        //);
      }

    }
  }
    
*/
}
