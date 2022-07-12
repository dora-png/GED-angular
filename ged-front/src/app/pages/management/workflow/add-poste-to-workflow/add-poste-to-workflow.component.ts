import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import * as constante from '../../../../loader/constante';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WorkFlowControllerService, StructureControllerService, WorkFlow, PageStructures, Postes, Structures, WorkFlowPoste } from '../../../../model/index';
import { HttpStatusCode } from 'src/app/loader/status-code';
import { AuthenticationService } from 'src/app/loader/authentication.service';


@Component({
  selector: 'app-add-poste-to-workflow',
  templateUrl: './add-poste-to-workflow.component.html',
  styleUrls: ['./add-poste-to-workflow.component.scss']
})
export class AddPosteToWorkflowComponent implements OnInit {

  structurePage?: PageStructures;
  constantes: any = constante;
  posteStructureEmpty: boolean = constante.falseValue;
  workFlowPostesEmpty: boolean = constante.trueValue;
  workFlowPostes: WorkFlowPoste[]=constante.arrayEmpty;
  posteStructure: Postes[]=constante.arrayEmpty;
  workFlowSigle: string|undefined;
  isEmpty: boolean = constante.trueValue;
  nameStructure: string = constante.tokenDefaultValue;
  loading: boolean = constante.falseValue;
  research: boolean = constante.falseValue;
  workflowEdited: boolean = constante.falseValue;
  valueToSearch!: string;
  searchBy: 'name' | 'sigle' | undefined;

  
   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: WorkFlow,
    private dialogRef:  MatDialogRef<AddPosteToWorkflowComponent>,
    private apiServiceWorkFlow: WorkFlowControllerService,    
    private auth: AuthenticationService,  
    private apiServiceStructure: StructureControllerService,     
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.workFlowSigle = this.data.sigle;
    this.initWorkFlowPoste();
  }
  onRemovePosteInWorfFlow(workFlowPoste: WorkFlowPoste){
    this.onRemoveData(workFlowPoste);
  }

  addPoste(poste: Postes){
    if(this.workFlowPostes.length <= constante.pageInit){
      let workFlowPoste : WorkFlowPoste = {
        idworkflowposte: undefined,
        posteId: poste,
        workflowId: this.data,
        dateCreation: undefined,
        isactive: constante.trueValue,
        level:constante.pageInit + 1
      };
      this.workFlowPostes.push(workFlowPoste);
    }else{
      let workFlowPoste : WorkFlowPoste = {
        idworkflowposte: undefined,
        posteId: poste,
        workflowId: this.data,
        dateCreation: undefined,
        isactive: constante.trueValue,
        level:this.workFlowPostes.length+1
      };
      this.workFlowPostes.push(workFlowPoste);
    }    
    this.workflowEdited = constante.trueValue;
    this.workFlowPostesEmpty = constante.trueValue;    
  }

  private initStructureList(page: number, size: number){
    this.apiServiceStructure.findAll4(page, size).subscribe(
      res => {
        if(res==constante.nullValue){
          this.toastr.info("Vous ne disposez d'aucune Direction / cellule",constante.infos);
          this.dialogRef.close(constante.falseValue);
        }else{
          this.isEmpty=constante.falseValue;
          this.structurePage=res;
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

  private initWorkFlow(page: number, size: number){
    this.apiServiceWorkFlow.allPosteInWorkFlow(this.data.idworkflows!,page, size).subscribe(
      res => {
        if(res==constante.nullValue){
          this.toastr.info("ce workflow n'a pas de poste pour effectuer les taches",constante.infos);
          this.workFlowPostesEmpty =  constante.falseValue;
          this.workFlowPostes = constante.arrayEmpty;       
        }else{
          this.workFlowPostesEmpty =  constante.trueValue;
          this.workFlowPostes = res.content!;
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

  private initWorkFlowPoste(){
    this.initStructureList(constante.pageInit, constante.sizeInit);
    this.initWorkFlow(constante.pageInit, constante.sizeInit);
  }

  private onRemoveData(workFlowPoste: WorkFlowPoste){
    this.apiServiceWorkFlow.removePosteToWorkFlow(workFlowPoste).subscribe(
      res => {
        this.toastr.success(constante.tokenDefaultValue,constante.update);
        this.workflowEdited = constante.trueValue;
        this.initWorkFlow(constante.pageInit, constante.sizeInit);
      },error => {
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
        }else{
          this.toastr.error(constante.tokenDefaultValue,constante.error);
        }        
      }
    );

  }

  private onDragPosteAction(){
    this.apiServiceWorkFlow.addPosteToWorkFlow(this.workFlowPostes).subscribe(
      res => {
        this.toastr.success(constante.tokenDefaultValue,constante.update);
        this.posteStructureEmpty = constante.falseValue;
        this.workFlowPostesEmpty = constante.trueValue;
        this.workFlowPostes =constante.arrayEmpty;
        this.posteStructure =constante.arrayEmpty;
        this.isEmpty = constante.trueValue;
        this.nameStructure = constante.tokenDefaultValue;
        this.loading = constante.falseValue;
        this.research = constante.falseValue;
        this.workflowEdited = constante.falseValue;
        this.dialogRef.close(constante.trueValue);
      },error => {
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
          this.posteStructureEmpty = constante.falseValue;
          this.workFlowPostesEmpty = constante.trueValue;
          this.workFlowPostes =constante.arrayEmpty;
          this.posteStructure =constante.arrayEmpty;
          this.isEmpty = constante.trueValue;
          this.nameStructure = constante.tokenDefaultValue;
          this.loading = constante.falseValue;
          this.research = constante.falseValue;
          this.workflowEdited = constante.falseValue;
          this.dialogRef.close(constante.falseValue);
        }else{
          this.toastr.error(constante.tokenDefaultValue,constante.error);
        }        
      }
    );

  }


  selectStructure(structure:Structures){
    if(structure.postes!.length <= constante.pageInit){
      this.toastr.info("La structure "+structure.name!+" ne contient auccun poste.",constante.infos);
      this.posteStructureEmpty = constante.falseValue;
    }else{
      this.posteStructureEmpty = constante.trueValue;
      this.posteStructure = structure.postes!;
      this.nameStructure = structure.name!;
    }
  }

  private onNextPage(page: number){
    this.apiServiceStructure.findAll4(page, constante.sizeInit).subscribe(
      res => {
        if(res==constante.nullValue){
          this.isEmpty=constante.trueValue;
        }else{
          this.isEmpty=constante.falseValue;
          this.structurePage=res;
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

  onNext(){
    if(this.searchBy==constante.nullValue){
      this.onNextPage(this.structurePage?.pageable?.pageNumber!+constante.one);
    }else{
      if(this.valueToSearch.length!>constante.pageInit){
        if(this.searchBy ==constante.nameSearchValue){
          this.searchNamePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!+constante.one);
        }else if(this.searchBy ==constante.sigleSearchValue){        
          this.searchSiglePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!+constante.one);
        }else{
          this.toastr.error("err.error.message", constante.error);
        }
      }
    }

  }

  onPreview(){
    if(this.searchBy==constante.nullValue){
      this.onNextPage(this.structurePage?.pageable?.pageNumber!-constante.one);
    }else{
      if(this.valueToSearch.length!>constante.pageInit){
        if(this.searchBy ==constante.nameSearchValue){
          this.searchNamePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!+constante.one);
        }else if(this.searchBy ==constante.sigleSearchValue){        
          this.searchSiglePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!+constante.one);
        }else{
          this.toastr.error("err.error.message", constante.error);
        }
      }
    }
  }

  private searchName(name: string,page: number, size: number){
    this.apiServiceStructure.searchByName4(name, page, size).subscribe(
      res => {
        if(res==constante.nullValue){
          this.research=constante.trueValue;
          //this.initStructureList();
        }else{
          this.research=constante.falseValue;
          this.structurePage=res;      
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

  private searchSigle(name: string,page: number, size: number){
    this.apiServiceStructure.searchBySigle3(name, page, size).subscribe(
      res => {
        if(res==constante.nullValue){
          this.research=constante.trueValue;
          //this.initStructureList();
        }else{
          this.research=constante.falseValue;
          this.structurePage=res;      
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

  private searchNamePage(name: string, page: number){
    this.searchName(name, page, constante.sizeInit);
  }

  private searchSiglePage(sigle: string, page: number){
    this.searchSigle(sigle, page, constante.sizeInit);
  }

  search(event: any){
    let searchValue: string =event.target.value;
    searchValue = searchValue.trim();
    if(searchValue.length!>constante.pageInit){
      this.valueToSearch=searchValue;
      if(this.searchBy ==constante.nameSearchValue){
        this.searchName(this.valueToSearch, constante.pageInit, constante.sizeInit);
      }else if(this.searchBy ==constante.sigleSearchValue){        
        this.searchSigle(this.valueToSearch, constante.pageInit, constante.sizeInit);
      }else{
        this.toastr.error("err.error.message", constante.error);
      } 
    }else{
      //this.initStructureList();
      this.research=constante.falseValue;
      this.searchBy = undefined;
    }
  }

  onClose(){
    this.posteStructureEmpty = constante.falseValue;
    this.workFlowPostesEmpty = constante.trueValue;
    this.workFlowPostes =constante.arrayEmpty;
    this.posteStructure =constante.arrayEmpty;
    this.isEmpty = constante.trueValue;
    this.nameStructure = constante.tokenDefaultValue;
    this.loading = constante.falseValue;
    this.research = constante.falseValue;
    this.workflowEdited = constante.falseValue;
    this.dialogRef.close(constante.falseValue);
  }

  onSave(){
    this.onDragPosteAction();
  }

  drop(event: CdkDragDrop<WorkFlowPoste[]>) { 
    moveItemInArray(this.workFlowPostes, event.previousIndex, event.currentIndex);   
    if(event.currentIndex!=event.previousIndex){
      this.workflowEdited = constante.trueValue;
      let currentLevel: number = this.workFlowPostes[event.currentIndex].level!;
      let previousLevel: number = this.workFlowPostes[event.previousIndex].level!;
      this.workFlowPostes[event.currentIndex].level = previousLevel;
      this.workFlowPostes[event.previousIndex].level = currentLevel;
    }   
  }


}
