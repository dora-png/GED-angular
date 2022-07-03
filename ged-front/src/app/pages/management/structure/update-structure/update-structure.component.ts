import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { StructureControllerService, Structures } from 'src/app/model';

@Component({
  selector: 'app-update-structure',
  templateUrl: './update-structure.component.html',
  styleUrls: ['./update-structure.component.scss']
})
export class UpdateStructureComponent implements OnInit {

  newStructureFormGroup!: FormGroup;
  clicked: boolean= false;
  isValid: boolean=true;
  
  
   
  constructor(    
    @Inject(MAT_DIALOG_DATA) private data: Structures,
    private loaderService: LoaderService,
    private apiService: StructureControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef <UpdateStructureComponent>
  ) { 
    this.newStructureFormGroup = formBuilder.group(
      {
        name: new FormControl(this.data.name!, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        sigle: new FormControl(this.data.sigle!, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        description: new FormControl(this.data.description!, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
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
      idstructure: this.data.idstructure!,
      name: undefined,
      sigle: undefined,
      description: undefined,
      postes: this.data.postes!,
      sousStructure: this.data.sousStructure!,
      structureSuperieur: this.data.structureSuperieur!,
      active: true
    };
  }

  onSaveNewWorkFow(){
    this.clicked=true;
    let body: Structures=this.initStructureBean();
    body.name = this.f["name"].value;
    body.sigle = this.f["sigle"].value;
    body.description = this.f["description"].value;
    this.newStructureFormGroup.reset();
    this.apiService.update3(body).subscribe(
      res => {
        this.toastr.success("true","Create");
        this.dialogRef.close(true);
      },
      error => {
        this.f["sigle"].setValue(body.sigle); 
        this.f["name"].setValue(body.name); 
        this.f["description"].setValue(body.description);
        this.clicked = false;
      }
    );
  }

  onClose(){
    this.dialogRef.close(false);
  }

}
