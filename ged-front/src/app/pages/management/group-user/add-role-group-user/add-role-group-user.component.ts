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


  droitsList: Droits[]=[];
  valid: boolean= true;
  clicked: boolean= false;
  isEmpty: boolean = false;
  loading: boolean = true;
  loadingPage: boolean = false;
  research: boolean = false;
  view: boolean = false;
  valueToSearch: string = "";
  droitPage! : PageDroits;
  groupRoleEdited: boolean = constante.falseValue;
  currentRoles: Droits[] = [];
  listRoles: Droits[] = [];
  private pagesize ={page: 0, size: 5};
  groupName: string = "";
  pageDroits!: PageDroits;

   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Droits[],
    private apiService: DroitsControllerService,
    private toastr: ToastrService,
    private dialogRef:  MatDialogRef<AddRoleGroupUserComponent>
    ) {
     }

     ngOnInit(): void {
      this.droitsList = this.data;
      this.initData(0,5);
    }
    
    private initData(page: number, size: number){
      this.loading = true;
      this.apiService.findAllDroit1(page,size).subscribe(
        resp=>{
          if(resp==null){
            this.isEmpty=true;
            this.loading = false;
          }else{
            this.isEmpty=false;
            this.droitPage = resp;
            this.loading = false;
          }
        },
        error=>{
          this.loading = false;
          this.toastr.info(error.error.message, "Infos");
        }
      );
    }
  
    onClose(){
      this.dialogRef.close(this.data);
    }

    onReset(){
      this.droitsList = this.initDroitsList();
      this.valid = true;
    }

    save(){
      this.dialogRef.close(this.droitsList);
    }

    addDroit(droit: Droits){
      this.droitsList.push(droit);
    }

    containDroit(droit: Droits){
      let containElement: boolean= false
      this.droitsList.find(
        droits=>{
          if(droit.iddroit===droits.iddroit){
            containElement = true;
          }
        }
      );
      return containElement;
    }
  
    removeDroit(droit: Droits){    
      this.droitsList = this.droitsList.filter(function (droits) {
          return droits.description != droit.description;
        }
      );
    }

    initDroitsList(): Droits[] {
      return this.data;
    }

    
  private pageSwitch(page: number, size: number){
    this.loadingPage = true;
    this.apiService.findAllDroit1(page=page,size=size).subscribe(
      response=>{
        console.log(response)
        if(response==null){
          this.isEmpty=true;
          this.loadingPage = false;
        }else{
          this.isEmpty=false;
          this.droitPage = response!;    
          this.loadingPage = false;
        }
      },
      error=>{
        this.loadingPage = false;
      }
    );
  }
  
private changePageOrSize(page: number, size: number){
  this.pageSwitch(page,size);
}

private changePageOrSizeSearchByName(name: string, page: number, size: number){ 
  this.pageSwitchsearchName(name=name, page=page, size=size);
}

changePageAndSize(event: {page: number, size: number}){
  if(this.valueToSearch.trim().length!<=0){
    this.changePageOrSize(event.page, event.size);
  }else{
    this.changePageOrSizeSearchByName(this.valueToSearch!, event.page, event.size);
  }  
}

private searchName(name: string, page: number, size: number){
  this.loadingPage = true;
  this.apiService.findDroitByDescription(name, page=page, size=size).subscribe(
    response=>{
      if(response==null){
        this.isEmpty=true;
        this.loadingPage = false;
      }else{
        this.isEmpty=false;
        this.droitPage = response!;  
        this.loadingPage = false;
      }
    },
    error=>{
      this.loadingPage = false;
    }
  );
}

private pageSwitchsearchName(name: string, page: number, size: number){
  this.loadingPage = true;
  this.apiService.findDroitByDescription(name, page=page, size=size).subscribe(
    response=>{
      if(response==null){
        this.isEmpty=true;
        this.loadingPage = false;
      }else{
        this.isEmpty=false;
        this.droitPage = response!;        
        this.loadingPage = false;
      }
    },
    error=>{
      this.loadingPage = false;
    }

  );
}

search(){
  if(this.valueToSearch.trim().length!>0){
    this.searchName(this.valueToSearch, 0, 5);
  }else{
    this.valueToSearch = "";
    this.initData(0,5);
    this.research=false;
  }

}
    


}
