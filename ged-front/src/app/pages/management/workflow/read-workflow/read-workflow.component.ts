import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { WorkFlowControllerService, WorkFlow, WorkFlowPoste, Liasses } from 'src/app/model';
import * as constante from '../../../../loader/constante';

@Component({
  selector: 'app-read-workflow',
  templateUrl: './read-workflow.component.html',
  styleUrls: ['./read-workflow.component.scss']
})
export class ReadWorkflowComponent implements OnInit {

  newWorkflowFormGroup!: FormGroup;  
  workFlowPosteList: Array<WorkFlowPoste>=constante.arrayEmpty;
  constantes: any = constante;
  clicked: boolean= constante.falseValue;
  isValid: boolean=constante.trueValue;
  liassesList: Array<Liasses>=constante.arrayEmpty;
  liasseEmpty: boolean=constante.falseValue;
  workFlowPosteEmpty: boolean=constante.falseValue;
  nameWorkflow: string=constante.tokenDefaultValue;
  
  
   
  constructor(    
    @Inject(MAT_DIALOG_DATA) private data: WorkFlow,
    private loaderService: LoaderService,
    private apiService: WorkFlowControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<ReadWorkflowComponent>
  ) { 
    this.nameWorkflow = this.data.name!;
    this.newWorkflowFormGroup = formBuilder.group(
      {
        name: new FormControl(this.data.name!, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        sigle: new FormControl(this.data.sigle!, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        description: new FormControl(this.data.description!, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
      }
    );
    if(this.data.liasses!.length<constante.pageInit){
      this.liasseEmpty=constante.falseValue;
    }else{
      this.liasseEmpty=constante.trueValue;
      this.liassesList=this.data.liasses!;
    }
  }

  ngOnInit(): void {
    this.apiService.allPosteInWorkFlow(this.data.idworkflows!).subscribe(
      res => {
        if(res==constante.nullValue){
          this.workFlowPosteEmpty=constante.falseValue;
        }else{          
          this.workFlowPosteEmpty=constante.trueValue;
          this.workFlowPosteList = res.content!;
        }
      },error => {
       
      }
    );
  }
  



}
