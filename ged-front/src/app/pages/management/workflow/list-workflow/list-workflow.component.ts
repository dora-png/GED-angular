import { Component, OnInit } from '@angular/core';
import { WorkFlowControllerService, WorkFlow, PageWorkFlow } from '../../../../model/index';
import * as constante from '../../../../loader/constante';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { CreateWorkflowComponent } from '../create-workflow/create-workflow.component';
import { ReadWorkflowComponent } from '../read-workflow/read-workflow.component';
import { UpdateWorkflowComponent } from '../update-workflow/update-workflow.component';
import { LoaderService } from 'src/app/loader/loader.service';
import { delay } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AddPosteToWorkflowComponent } from '../add-poste-to-workflow/add-poste-to-workflow.component';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { HttpStatusCode } from '../../../../loader/status-code';


@Component({
  selector: 'app-list-workflow',
  templateUrl: './list-workflow.component.html',
  styleUrls: ['./list-workflow.component.scss']
})
export class ListWorkflowComponent implements OnInit {

  pageWorkFlow!: PageWorkFlow;
  isEmpty: boolean = constante.trueValue;
  loading: boolean = constante.trueValue;
  loadingOther: boolean = constante.falseValue;
  view: boolean = constante.falseValue;
  constantes: any = constante;
  valueToSearch!: string;
  searchBy: 'name' | 'sigle' | undefined;
  
  constructor(
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiService: WorkFlowControllerService,   
    private auth: AuthenticationService,   
    private toastr: ToastrService
    ) { }

    ngOnInit(): void {
      this.initData(this.constantes.pageInit,this.constantes.sizeInit,this.constantes.trueValue);
    }
  
    onHasRole(role:string): boolean{
      return this.auth.getRoles(role);
    }

    private listenToLoading(init: boolean): void {
      if(init){      
        this.loaderService.getSub
        .pipe(delay(this.constantes.pageInit)) 
        .subscribe((loading) => {
          this.loading = loading;
        });
      }else{
        this.loaderService.getSub
        .pipe(delay(this.constantes.pageInit)) 
        .subscribe((loading) => {
          this.loadingOther = loading;
        });
      }
      
    }

  private initData(page: number, size: number, init: boolean){
    this.listenToLoading(init);
    this.apiService.findAll(page,size).subscribe(
      res => {
        if(res==constante.nullValue){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageWorkFlow=res;
        }
      },
      error => {
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
        }else{
          this.toastr.error(constante.tokenDefaultValue,constante.error);
        }
      }
    );
  }

  openDialogEdit(workFlow: WorkFlow) {
    this.openDialogService.openDialog(UpdateWorkflowComponent, workFlow)
      .afterClosed()
      .subscribe(result => {
        if(result){
          this.refresf();
        }
      });
  }

  openDialogHistoric(workFlow: WorkFlow) {
    this.openDialogService.openDialog(ReadWorkflowComponent, workFlow);
  }

  newWorkflow() {
    this.openDialogService.openDialog(CreateWorkflowComponent)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }

  openDialogAddPoste(workFlow: WorkFlow) {
    this.openDialogService.openDialog(AddPosteToWorkflowComponent, workFlow)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }
  

  private changePageOrSize(page: number, size: number){
    this.initData(page,size,this.constantes.falseValue);
  }

  private changePageOrSizeSearchByName(name: string, page: number, size: number){
    this.searchName(name, page, size);
  }

  
  private changePageOrSizeSearchBySigle(sigle: string, page: number, size: number){
    this.searchSigle(sigle, page, size);
  }

  changePageAndSize(event: {page: number, size: number}){    
    if(this.searchBy==constante.nullValue){
      this.changePageOrSize(event.page, event.size);
    }else{
      if(this.searchBy ==this.constantes.nameSearchValue){
        this.changePageOrSizeSearchByName(this.valueToSearch!, event.page, event.size);
      }else if(this.searchBy ==this.constantes.sigleSearchValue){       
        this.changePageOrSizeSearchBySigle(this.valueToSearch!, event.page, event.size);
      }else{
        this.toastr.error(constante.tokenDefaultValue, this.constantes.error);
      }
    }    
  }



  private searchName(name: string, page: number, size: number){
    this.listenToLoading(this.constantes.falseValue);
    this.apiService.searchByName(name,page,size).toPromise().then(
      res => {
        if(res==constante.nullValue){
          this.pageWorkFlow!=res;
        }else{
          this.pageWorkFlow=res;
        }
      },error => {
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
        }else{
          this.toastr.error(constante.tokenDefaultValue,constante.error);
        }
      }
    );
  }

  private searchSigle(sigle: string, page: number, size: number){
    this.listenToLoading(this.constantes.falseValue);
    this.apiService.searchBySigle(sigle,page,size).toPromise().then(
      res => {
        if(res==constante.nullValue){
          this.pageWorkFlow!=res;
        }else{
          this.pageWorkFlow=res;
        }
      },error => {
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
        }else{
          this.toastr.error(constante.tokenDefaultValue,constante.error);
        }
      }
    );
  }

  search(){
    if(this.valueToSearch.trim().length!>this.constantes.pageInit){
      if(this.searchBy ==this.constantes.nameSearchValue){
        this.searchName(this.valueToSearch,this.constantes.pageInit,this.constantes.sizeInit);
      }else if(this.searchBy ==this.constantes.sigleSearchValue){        
        this.searchSigle(this.valueToSearch,this.constantes.pageInit,this.constantes.sizeInit);
      }else{
        this.toastr.error("select paramater to search", this.constantes.error);
      } 
    }
  }

  modelChanged(event: any){
    if(event.trim().length!<=this.constantes.pageInit){
      this.searchBy = undefined;
      this.refresf();
    }
  }

  viewList(){
    this.view=!this.view;

  }

  refresf(){
    this.initData(this.constantes.pageInit,this.constantes.sizeInit,this.constantes.trueValue);
  }

}
