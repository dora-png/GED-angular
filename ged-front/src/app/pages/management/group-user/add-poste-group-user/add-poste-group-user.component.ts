import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { GroupUser, GroupUserControllerService, PagePostes, PosteControllerService, Postes } from 'src/app/model';

@Component({
  selector: 'app-add-poste-group-user',
  templateUrl: './add-poste-group-user.component.html',
  styleUrls: ['./add-poste-group-user.component.scss']
})
export class AddPosteGroupUserComponent implements OnInit {


  isEmpty: boolean = true;
  loading: boolean = false;
  research: boolean = false;
  view: boolean = false;
  currentPoste: Postes[] = [];
  listPoste: Postes[] = [];
  private valueToSearch!: string;
  searchBy: 'name' | 'login' | undefined;
  private pagesize ={page: 0, size: 5};
  groupName: string = "";
  pagePoste!: PagePostes;

   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: GroupUser,
    private loaderService: LoaderService,
    private apiGroupsService: GroupUserControllerService,   
    private apiService: PosteControllerService,    
    private toastr: ToastrService
    ) {
      this.groupName = this.data.name!;
     }

     ngOnInit(): void {
      this.listenToLoading();
      this.initData(0,5);
    }
      
    private listenToLoading(): void {
      this.loaderService.getSub
        .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
        .subscribe((loading) => {
          this.loading = loading;
        });
    }

    private findAllPosteNotIn(groupUser: GroupUser, page?: number, size?: number){
      this.apiService.findPosteToAdd(groupUser.idgroupes!,page,size).subscribe(
        resp=>{
          if(resp==null){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
            this.pagePoste=resp;
            this.listPoste = resp!.content!;
          }
        },
        error=>{
          this.toastr.info(error.error.message, "Infos");
          console.log(error);
        }
      );
    }
    
    private initData(page: number, size: number){
      this.currentPoste = [];
      this.apiGroupsService.findGroupUserById(this.data!.idgroupes!).subscribe(
        resp=>{
          this.data=resp;
          this.currentPoste = this.data.posteslistes!;
          this.findAllPosteNotIn(resp);
        },
        error=>{
          this.toastr.info(error.error.message, "Infos");
          //close modal
        }
      );
    }
    
  private changePageOrSize(page: number, size: number){
    this.listenToLoading();
    this.initData(page, size);
  }

  private changePageOrSizeSearchByName(name: string, page: number, size: number){
    this.listenToLoading();
    this.apiService.findPosteToAddByName(this.data.idgroupes!,name, page, size).subscribe(
      resp=>{
        if(resp==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pagePoste=resp;
          this.listPoste = resp!.content!;
        }
      },
      error=>{
        this.toastr.info(error.error.message, "Infos");
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
        this.toastr.info("Cochez sur name pour la recherche", "Infos");
      }

    }    
  }
 
  private searchName(name: string){
    this.listenToLoading();
    this.apiService.findPosteToAddByName(this.data.idgroupes!,name).subscribe(
      resp=>{
        if(resp==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pagePoste=resp;
          this.listPoste = resp!.content!;
        }
      },
      error=>{
        this.toastr.info(error.error.message, "Infos");
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
    this.listenToLoading();
    this.initData(0,5);
  }

  onDrop(event: CdkDragDrop<Postes []>){
    if(event.previousContainer==event.container){
    }else{
      if(event.previousContainer.data == this.listPoste ){
        let groupToAdd: GroupUser={
          dateCreation:this.data.dateCreation,
          idgroupes:this.data.idgroupes,
          name:this.data.name,
          posteslistes:[],
          roleslistes:this.data.roleslistes
        };
        groupToAdd.posteslistes?.push(this.listPoste[event.previousIndex]);

        this.apiGroupsService.addPosteToGroup(groupToAdd).subscribe(
          response=>{
            this.toastr.success("Added", "OK");
            transferArrayItem(
              this.listPoste,
              this.currentPoste,
              event.previousIndex,
              event.currentIndex
            );
          },
          error=>{
            this.toastr.info(error.error.message, "Infos");
          }
        );

      }

    }
  }

  onRemove(poste: Postes){

  }

}
