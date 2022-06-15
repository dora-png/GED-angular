import { Component, OnInit } from '@angular/core';
import { WorkFlowControllerService, WorkFlow, PageWorkFlow } from '../../../../model/index';

import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { CreateWorkflowComponent } from '../create-workflow/create-workflow.component';
import { ReadWorkflowComponent } from '../read-workflow/read-workflow.component';
import { UpdateWorkflowComponent } from '../update-workflow/update-workflow.component';
import { LoaderService } from 'src/app/loader/loader.service';
import { delay } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AddPosteToWorkflowComponent } from '../add-poste-to-workflow/add-poste-to-workflow.component';


@Component({
  selector: 'app-list-workflow',
  templateUrl: './list-workflow.component.html',
  styleUrls: ['./list-workflow.component.scss']
})
export class ListWorkflowComponent implements OnInit {

  pageWorkFlow!: PageWorkFlow;
  isEmpty: boolean = true;
  loading: boolean = false;
  research: boolean = false;
  private valueToSearch!: string;
  searchBy: 'name' | 'sigle' | undefined;
  private pagesize ={page: 0, size: 5};
  
  constructor(
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiService: WorkFlowControllerService,    
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    
    this.initData();
  }

  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  private initData(){
    this.listenToLoading();
    this.apiService.findAll(1,this.pagesize.page,this.pagesize.size).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageWorkFlow=res;
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

  openDialogEdit(workFlow: WorkFlow) {
    this.openDialogService.openDialog(UpdateWorkflowComponent, workFlow);
  }

  openDialogHistoric(workFlow: WorkFlow) {
    this.openDialogService.openDialog(ReadWorkflowComponent, workFlow);
  }

  newWorkflow() {
    this.openDialogService.openDialog(CreateWorkflowComponent);
  }

  openDialogAddPoste(workFlow: WorkFlow) {
    this.openDialogService.openDialog(AddPosteToWorkflowComponent, workFlow);
  }
  

  private changePageOrSize(page: number, size: number){
    this.listenToLoading();
    this.apiService.findAll(1,page, size).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageWorkFlow=res;
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
    this.apiService.searchByName(1,name, page, size).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageWorkFlow=res;
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

  
  private changePageOrSizeSearchBySigle(sigle: string, page: number, size: number){
    this.listenToLoading();
    this.apiService.searchBySigle(1,sigle, page, size).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageWorkFlow=res;
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
      }else if(this.searchBy =="sigle"){        
        this.changePageOrSizeSearchBySigle(this.valueToSearch!, event.page, event.size);
      }else{
        this.toastr.error("err.error.message", "Error +err.status");
      }

    }
    
  }



  private searchName(name: string){
    this.listenToLoading();
    this.apiService.searchByName(1,name).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initData();
        }else{
          this.research=false;
          this.pageWorkFlow=res;
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
  private searchSigle(name: string){
    this.listenToLoading();
    this.apiService.searchBySigle(1,name).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initData();
        }else{
          this.research=false;
          this.pageWorkFlow=res;
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
      }else if(this.searchBy =="sigle"){        
        this.searchSigle(this.valueToSearch);
      }else{
        this.toastr.error("err.error.message", "Error +err.status");
      } 
    }else{
      this.initData();
      this.research=false;
      this.searchBy = undefined;
    }
  }

}
