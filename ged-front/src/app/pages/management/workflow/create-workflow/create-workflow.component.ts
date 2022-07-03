import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { WorkFlowControllerService, WorkFlow } from 'src/app/model';

@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.scss']
})
export class CreateWorkflowComponent implements OnInit {


  newWorkflowFormGroup!: FormGroup;
  clicked: boolean= false;
  
  
   
  constructor(
    private loaderService: LoaderService,
    private apiService: WorkFlowControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<CreateWorkflowComponent>
  ) { 
    this.newWorkflowFormGroup = formBuilder.group(
      {
        name: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        sigle: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        description: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
      }
    );
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.newWorkflowFormGroup.controls;
  }

  private initWorkFlowBean(): WorkFlow{
    return {
      idworkflows: undefined,
      name: undefined,
      sigle: undefined,
      description: undefined,
      liasses: undefined,
      typeDocs: undefined,
    };
  }

  onSaveNewWorkFow(){
    this.clicked=true;
    let body: WorkFlow=this.initWorkFlowBean();
    body.name = this.f["name"].value;
    body.sigle = this.f["sigle"].value;
    body.description = this.f["description"].value;
    this.newWorkflowFormGroup.reset();
    this.apiService.add(body,"Maire").toPromise().then(
      res => {
        this.toastr.success("true","Create");
        this.dialogRef.close(true);
      }
    ).catch(
      error => {
        this.f["sigle"].setValue(body.sigle); 
        this.f["name"].setValue(body.name); 
        this.f["description"].setValue(body.description);
        this.clicked = false;
      }
    ).finally(
      () => {
      }
    );
  }

  
  onClose(){
    this.dialogRef.close(false);
  }


}
