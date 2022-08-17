import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import * as constante from '../../../../loader/constante';
import { GroupUser, GroupUserControllerService, PageDroits, Droits, DroitsControllerService } from 'src/app/model';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { HttpStatusCode } from 'src/app/loader/status-code';

@Component({
  selector: 'app-add-role-group-user',
  templateUrl: './add-role-group-user.component.html',
  styleUrls: ['./add-role-group-user.component.scss']
})
export class AddRoleGroupUserComponent implements OnInit {


  isEmpty: boolean = true;
  loading: boolean = false;
  clicked: boolean = false;
  groupRoleEdited: boolean = constante.falseValue;
  research: boolean = false;
  view: boolean = false;
  currentRoles: Droits[] = [];
  listRoles: Droits[] = [];
  private valueToSearch!: string;
  searchBy: 'name' | 'login' | undefined;
  private pagesize ={page: 0, size: 5};
  groupName: string = "";
  pageDroits!: PageDroits;

   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private loaderService: LoaderService,
    private apiGroupsService: GroupUserControllerService,   
    private apiService: DroitsControllerService,
    private auth: AuthenticationService,    
    private toastr: ToastrService,
    private dialogRef:  MatDialogRef<AddRoleGroupUserComponent>
    ) {
     }

     ngOnInit(): void {
      //this.listenToLoading();
      this.initData(0,5);
    }
      
    private listenToLoading(): void {
      this.loaderService.getSub
        .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
        .subscribe((loading) => {
          this.loading = loading;
        });
    }

    private findAllRulesNotIn(droitList: number[], page?: number, size?: number){
      this.apiService.findListDroitToAddInGroup(droitList,page,size).subscribe(
        resp=>{
          if(resp==null){
            this.pageDroits = resp;
          }else{
            this.pageDroits = resp;
          }
        },
        error=>{
          this.toastr.info(error.error.message, "Infos");
        }
      );
    }

    private findAllRules(page?: number, size?: number){
      this.apiService.findAllDroit(page,size).subscribe(
        resp=>{
          console.log(resp)
          this.pageDroits = resp;
        },
        error=>{
          this.toastr.info(error.error.message, "Infos");
        }
      );
    }
    
    private initData(page: number, size: number){
      this.currentRoles = [];
      this.apiService.findAllDroitUser(this.data!,page,size).subscribe(
        resp=>{
          if(resp==null){
            this.isEmpty=true;
            this.findAllRules();
          }else{
            this.isEmpty=false;
            this.currentRoles=resp;
            let listIds : Array<number> = [];
            this.currentRoles.forEach(droits =>{
              let id: number = droits.iddroit!;
              listIds.push(id.valueOf());
            });
            this.findAllRulesNotIn(listIds);
          }
        },
        error=>{
          this.toastr.info(error.error.message, "Infos");
        }
      );
    }

    addDroit(droit: Droits){
      //this.droitToAdd.push(droit);
    }
    containDroit(droit: Droits){
      let containElement: boolean= false
      /*this.droitToAdd.find(
        droits=>{
          if(droit.iddroit===droits.iddroit){
            containElement = true;
          }
        }
      );*/
      return containElement;
    }
  
    removeDroit(droit: Droits){    
      /*this.droitToAdd = this.droitToAdd.filter(function (droits) {
          return droits.abbr != droit.abbr;
        }
      );*/
    }
    
  onRemove(droitBean: Droits){    
   /* this.clicked=!this.clicked;
    let profilesDroitBean: ProfilesDroitBean = {
      droit: droitBean.iddroit,
      profile: this.data
    };*/
   /* this.apiServiceProfile.removeDroitsToUsers(profilesDroitBean).subscribe(
      response=>{
        this.droitBeans = this.droitBeans.filter(function (droits) {
          return droits.iddroit != droitBean.iddroit && droits.typeDroit != droitBean.typeDroit;
        }
      );
        this.clicked=!this.clicked;
      },
      error=>{
        this.clicked=!this.clicked;
      }
    )*/
  }

  onClose(){
    this.closeModal(false);
  }

  private closeModal(value: boolean){
    this.dialogRef.close(value);
  }

  changePageAndSize(event: any){
    
  }
  /*  
  private changePageOrSize(page: number, size: number){
    this.listenToLoading();
    this.initData(page, size);
  }

  private changePageOrSizeSearchByName(name: string, page: number, size: number){
    this.listenToLoading();
    this.apiService.findRoleToAddName(this.data.idgroupes!,name, page, size).subscribe(
      resp=>{
        if(resp==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageRoles=resp;
          this.listRoles = resp!.content!;
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
    this.apiService.findRoleToAddName(this.data.idgroupes!,name).subscribe(
      resp=>{
        if(resp==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageRoles=resp;
          this.listRoles = resp!.content!;
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

  onDrop(event: CdkDragDrop<Roles []>){
    if(event.previousContainer!=event.container){
      if(event.previousContainer.data == this.listRoles ){
        transferArrayItem(
          this.listRoles,
          this.currentRoles,
          event.previousIndex,
          event.currentIndex
        );
        this.groupRoleEdited = constante.trueValue;

        //this.apiGroupsService.addPosteToGroup(groupToAdd).subscribe(
         // response=>{
         //   this.toastr.success("Added", "OK");
            
         // },
        //  error=>{
        //    this.toastr.info(error.error.message, "Infos");
        //  }
        //);

      }

    }
  }

 
  
  onRemove(role: Roles){
    this.data.roleslistes = [];
    this.data.roleslistes.push(role);
    this.apiGroupsService.removeRoleToGroup(this.data).subscribe(
      response=>{
        this.toastr.success("", constante.update);
        this.initData(0,5);
      },
      error=>{
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
          this.dialogRef.close(constante.falseValue);
        }else{
          this.toastr.error(constante.tokenDefaultValue,constante.error);
        }
      }
    );
  }
  onClose(){
    this.isEmpty = constante.trueValue;
    this.loading = constante.falseValue;
    this.research = constante.falseValue;
    this.groupRoleEdited = constante.falseValue;
    this.dialogRef.close(constante.trueValue);
  }

  onSave(){
    this.data.roleslistes = this.currentRoles;
    this.apiGroupsService.addRoleToGroup(this.data).subscribe(
      response=>{
        this.toastr.success("", constante.update);
        this.dialogRef.close(constante.trueValue);       
      },
      error=>{
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
          this.dialogRef.close(constante.falseValue);
        }else{
          this.toastr.error(constante.tokenDefaultValue,constante.error);
        }
      }
    );
  }*/
}
