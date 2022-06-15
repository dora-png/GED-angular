import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { StructureControllerService, Structures } from 'src/app/model';

@Component({
  selector: 'app-create-structure',
  templateUrl: './create-structure.component.html',
  styleUrls: ['./create-structure.component.scss']
})
export class CreateStructureComponent implements OnInit {

  newStructureFormGroup!: FormGroup;
  clicked: boolean= false;
  
  
   
  constructor(
    private loaderService: LoaderService,
    private apiService: StructureControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<CreateStructureComponent>
  ) { 
    this.newStructureFormGroup = formBuilder.group(
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
    return this.newStructureFormGroup.controls;
  }

  private initStructureBean(): Structures{
    return {
      idstructure: undefined,
      name: undefined,
      sigle: undefined,
      description: undefined,
      postes: undefined,
      sousStructure: undefined,
      structureSuperieur: undefined
    };
  }

  onSaveNewWorkFow(){
    this.clicked=true;
    let body: Structures=this.initStructureBean();
    body.name = this.f["name"].value;
    body.sigle = this.f["sigle"].value;
    body.description = this.f["description"].value;
    this.newStructureFormGroup.reset();
    this.apiService.add4(body,"Maire").toPromise().then(
      res => {
        this.toastr.success("true","Create");
        this.dialogRef.close();
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


}
