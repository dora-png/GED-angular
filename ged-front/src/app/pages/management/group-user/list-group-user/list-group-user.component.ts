import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
//import { GroupUser, GroupUserControllerService, PageGroupUser } from 'src/app/model';
import { AddGroupUserComponent } from '../add-group-user/add-group-user.component';
import { AddPosteGroupUserComponent } from '../add-poste-group-user/add-poste-group-user.component';
import { InfosGroupUserComponent } from '../infos-group-user/infos-group-user.component';
import { UpdateGroupUserComponent } from '../update-group-user/update-group-user.component';
import { AddRoleGroupUserComponent } from '../add-role-group-user/add-role-group-user.component';

@Component({
  selector: 'app-list-group-user',
  templateUrl: './list-group-user.component.html',
  styleUrls: ['./list-group-user.component.scss']
})
export class ListGroupUserComponent implements OnInit {
/*

  pageGroupUser!: PageGroupUser;
  isEmpty: boolean = true;
  loading: boolean = false;
  research: boolean = false;
  view: boolean = false;
  private valueToSearch!: string;
  searchBy: 'name' | undefined;
  private pagesize ={page: 0, size: 5};

  constructor(
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiService: GroupUserControllerService,    
    private toastr: ToastrService
    ) { }
*/
  ngOnInit(): void {
    //this.initData(0,5);
  }
/*
  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
  
  private initData(page: number, size: number){
    this.listenToLoading();
    this.apiService.findAllGroup(page,size).subscribe(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageGroupUser=res;
        }
      },error => {
      }
    );
  }

  newGroupUser() {
    this.openDialogService.openDialog(AddGroupUserComponent)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }

  openDialogEdit(group: GroupUser) {
    this.openDialogService.openDialog(UpdateGroupUserComponent, group)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }

  openDialogHistoric(group: GroupUser) {
    this.openDialogService.openDialog(InfosGroupUserComponent, group);
  }



  openDialogAddRemoveRole(group: GroupUser) {
    this.openDialogService.openDialog(AddRoleGroupUserComponent, group)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }

  openDialogAddRemovePostes(group: GroupUser) {
    this.openDialogService.openDialog(AddPosteGroupUserComponent, group)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }
  
  private changePageOrSize(page: number, size: number){
    this.listenToLoading();
    this.initData(page,size);
  }

  private changePageOrSizeSearchByName(name: string, page: number, size: number){
    this.listenToLoading();
    this.apiService.searchGroupUserByName(name,page,size).subscribe(
      res => {
        if(res==null){
          this.isEmpty=true;
          this.pageGroupUser=res;
        }else{
          this.isEmpty=false;
          this.pageGroupUser=res;
        }
      },error => {
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
        this.toastr.info("Coche sur name puis recommancer la recherche", "Infos");
      }

    }    
  }
 
  private searchName(name: string){
    this.listenToLoading();
    this.apiService.searchGroupUserByName(name).subscribe(
      res => {
        if(res==null){
          this.isEmpty=true;
          this.pageGroupUser=res;
        }else{
          this.isEmpty=false;
          this.pageGroupUser=res;
        }
      },error => {
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
    this.initData(0,5);
  }

*/

}
