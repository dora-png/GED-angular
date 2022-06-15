import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { JsonPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { WorkFlowControllerService, StructureControllerService, WorkFlow, PageStructures, Postes, Structures, WorkFlowPoste, WorkFlowPosteListe } from '../../../../model/index';


@Component({
  selector: 'app-add-poste-to-workflow',
  templateUrl: './add-poste-to-workflow.component.html',
  styleUrls: ['./add-poste-to-workflow.component.scss']
})
export class AddPosteToWorkflowComponent implements OnInit {

  structurePage?: PageStructures;
  workFlowPoste: Array<WorkFlowPoste>=[];
  posteWorkFlow: Array<Postes>=[];
  posteStructure: Array<Postes>=[];
  workFlowSigle: string|undefined;
  isEmpty: boolean = true;
  nameStructure: string = "";
  loading: boolean = false;
  research: boolean = false;
  private valueToSearch!: string;
  searchBy: 'name' | 'sigle' | undefined;

  
   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: WorkFlow,
    private dialogRef:  MatDialogRef<AddPosteToWorkflowComponent>,    
    private openDialogService: OpenDialogService,
    private apiServiceWorkFlow: WorkFlowControllerService, 
    private apiServiceStructure: StructureControllerService,     
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.workFlowSigle = this.data.sigle;
    this.initWorkFlowPoste();
  }
  onRemovePosteInWorfFlow(postee: Postes){
    this.posteWorkFlow.splice(this.posteWorkFlow.findIndex(poste => poste.idposte === postee.idposte),1);
    let workFlowPosteListe: Array<WorkFlowPosteListe>=[]; 
    workFlowPosteListe.push(
      {
        exist: false,
        index: 0,
        idWorkFlow: this.data!.idworkflows!,
        idPoste: postee.idposte!
      }
    );
    this.posteWorkFlow.forEach(
      (postes: Postes, index:number)=>{
        workFlowPosteListe.push(
          {
            exist: true,
            index: index,
            idWorkFlow: this.data!.idworkflows!,
            idPoste: postes.idposte!
          }
        );
      }
    );   
    this.onRemoveData(workFlowPosteListe,"Maire");
  }

  private initStructureList(){
    this.apiServiceStructure.findAll4().toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.structurePage=res;
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

  private initWorkFlow(){
    this.apiServiceWorkFlow.allPosteInWorkFlow(this.data.idworkflows!,1).toPromise().then(
      res => {
        if(res==null){

        }else{
          this.workFlowPoste = res.content!;
          res.content!.forEach(
            (workflowPoste: WorkFlowPoste)=>{
              this.posteWorkFlow.push(workflowPoste.posteId!);
            }
          );
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

  private initWorkFlowPoste(){
    this.initStructureList();
    this.initWorkFlow();
  }

  private onRemoveData(workFlowPosteListe: Array<WorkFlowPosteListe>,posteName: string){
    this.apiServiceWorkFlow.removePosteToWorkFlow(workFlowPosteListe).toPromise().then(
      res => {

      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
      }
    );

  }

  private onDragPosteAction(workFlowPosteListe: Array<WorkFlowPosteListe>,posteName: string){
    this.apiServiceWorkFlow.addPosteToWorkFlow(workFlowPosteListe).toPromise().then(
      res => {

      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
      }
    );

  }


  onDrop(event: CdkDragDrop<Postes []>){
    let a=this.posteStructure;
    if(event.previousContainer==event.container){
      if(event.container.data == this.posteWorkFlow ){
        moveItemInArray(
          this.posteWorkFlow ,
          event.previousIndex,
          event.currentIndex
        );
        if(event.previousIndex==event.currentIndex){         
        }else{
          let workFlowPosteListe: Array<WorkFlowPosteListe>=[];
          this.posteWorkFlow.forEach(
            (postes: Postes, index:number)=>{
              workFlowPosteListe.push(
                {
                  exist: true,
                  index: index,
                  idWorkFlow: this.data!.idworkflows!,
                  idPoste: postes.idposte!
                }
              );
            }
          );
          this.onDragPosteAction(workFlowPosteListe,"Maire");
        }
      }
    }else{
      if(event.previousContainer.data == this.posteStructure ){
        transferArrayItem(
          this.posteStructure,
          this.posteWorkFlow,
          event.previousIndex,
          event.currentIndex
        );
        let workFlowPosteListe: Array<WorkFlowPosteListe>=[];
        this.posteWorkFlow.forEach(
          (postes: Postes, index:number)=>{
            workFlowPosteListe.push(
              {
                exist: true,
                index: index,
                idWorkFlow: this.data!.idworkflows!,
                idPoste: postes.idposte!
              }
            );
          }
        );
        this.onDragPosteAction(workFlowPosteListe,"Maire");        
      }

    }
  }

  selectStructure(structure:Structures){
    this.posteStructure = structure.postes!;
    this.nameStructure = structure.name!;
  }

  private onNextPage(page: number){
    this.apiServiceStructure.findAll4(page).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.structurePage=res;
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

  onNext(){
    if(this.searchBy==null){
      this.onNextPage(this.structurePage?.pageable?.pageNumber!+1);
    }else{
      if(this.valueToSearch.length!>0){
        if(this.searchBy =="name"){
          this.searchNamePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!+1);
        }else if(this.searchBy =="sigle"){        
          this.searchSiglePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!+1);
        }else{
          this.toastr.error("err.error.message", "Error +err.status");
        }
      }
    }

  }

  onPreview(){
    if(this.searchBy==null){
      this.onNextPage(this.structurePage?.pageable?.pageNumber!-1);
    }else{
      if(this.valueToSearch.length!>0){
        if(this.searchBy =="name"){
          this.searchNamePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!-1);
        }else if(this.searchBy =="sigle"){        
          this.searchSiglePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!-1);
        }else{
          this.toastr.error("err.error.message", "Error +err.status");
        }
      }
    }
  }

  private searchName(name: string){
    console.log(name);
    this.apiServiceStructure.searchByName4(name).toPromise().then(
      res => {
        
    console.log(res);
        if(res==null){
          this.research=true;
          this.initStructureList();
        }else{
          this.research=false;
          this.structurePage=res;      
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
    this.apiServiceStructure.searchBySigle3(name).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initStructureList();
        }else{
          this.research=false;
          this.structurePage=res;      
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

  private searchNamePage(name: string, page: number){
    this.apiServiceStructure.searchByName4(name, page).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initStructureList();
        }else{
          this.research=false;
          this.structurePage=res;      
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

  private searchSiglePage(sigle: string, page: number){
    this.apiServiceStructure.searchBySigle3(sigle, page).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initStructureList();
        }else{
          this.research=false;
          this.structurePage=res;      
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
      this.initStructureList();
      this.research=false;
      this.searchBy = undefined;
    }
  }


}
