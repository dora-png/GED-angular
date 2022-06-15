import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { WorkFlowControllerService, WorkFlow, WorkFlowPoste, Liasses } from 'src/app/model';

@Component({
  selector: 'app-read-workflow',
  templateUrl: './read-workflow.component.html',
  styleUrls: ['./read-workflow.component.scss']
})
export class ReadWorkflowComponent implements OnInit {

  newWorkflowFormGroup!: FormGroup;  
  workFlowPosteList: Array<WorkFlowPoste>=[];
  clicked: boolean= false;
  isValid: boolean=true;
  liassesList: Array<Liasses>=[];
  liasseEmpty: boolean=false;
  workFlowPosteEmpty: boolean=false;
  nameWorkflow: string="";
  
  
   
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
    if(this.data.liasses!.length<0){
      this.liasseEmpty=false;
    }else{
      this.liasseEmpty=false;
      this.liassesList=this.data.liasses!;
    }
  }

  ngOnInit(): void {
    this.apiService.allPosteInWorkFlow(this.data.idworkflows!,1).toPromise().then(
      res => {
        if(res==null){
          this.workFlowPosteEmpty=false;
        }else{          
          this.workFlowPosteEmpty=true;
          this.workFlowPosteList = res.content!;
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
  



}
