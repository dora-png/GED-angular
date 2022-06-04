import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { WorkFlowControllerService, StructureControllerService, WorkFlow, PageStructures, Postes, Structures } from '../../../../model/index';

@Component({
  selector: 'app-add-poste-to-workflow',
  templateUrl: './add-poste-to-workflow.component.html',
  styleUrls: ['./add-poste-to-workflow.component.scss']
})
export class AddPosteToWorkflowComponent implements OnInit {

  structurePage?: PageStructures;
  posteWorkFlow: Array<Postes>=[];
  posteStructure: Array<Postes>=[];
  workFlowSigle: string|undefined;
  isEmpty: boolean = true;

  structureSelected = new FormControl();

  structureList: string[] = ['DUAC', 'DBOU', 'Archive', 'RH', 'SG', 'Courrier'];

  
  

  workflows: string [] = ['mon poste'];

  postesList: string [] = ['Poste 1', 'Poste 2', 'Poste 3', 'Poste 4', 'Poste 5','Poste 6', 'Poste 7', 'Poste 8', 'Poste 9', 'Poste 10'];

  
   
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

  private initWorkFlowPoste(){
    
    /*console.log(this.data);
    this.apiServiceWorkFlow.allPosteInWorkFlow(this.data,"Maire").toPromise().then(
      res => {
        console.log(res);
      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
      }
    );*/
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


  onDrop(event: CdkDragDrop<Postes []>){
    if(event.previousContainer==event.container){
      if(event.container.data == this.postesList ){
        moveItemInArray(
          this.postesList ,
          event.previousIndex,
          event.currentIndex
        );
      }else if(event.container.data == this.posteStructure){
        moveItemInArray(
          this.posteStructure,
          event.previousIndex,
          event.currentIndex
        );
      }
    }else{
      if(event.previousContainer.data == this.posteStructure ){
        transferArrayItem(
          this.posteStructure,
          this.posteWorkFlow,
          event.previousIndex,
          event.currentIndex
        );
      }else if(event.previousContainer.data == this.posteWorkFlow){
        transferArrayItem(
          this.posteWorkFlow,
          this.posteStructure,
          event.previousIndex,
          event.currentIndex
        );
      }

    }
  }

  selectStructure(structure:Structures){
    this.posteStructure = structure.postes!;
  }


}
