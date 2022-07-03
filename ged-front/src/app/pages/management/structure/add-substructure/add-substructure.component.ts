import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { StructureControllerService, Structures } from 'src/app/model';
@Component({
  selector: 'app-add-substructure',
  templateUrl: './add-substructure.component.html',
  styleUrls: ['./add-substructure.component.scss']
})
export class AddSubstructureComponent implements OnInit {

  newStructureFormGroup!: FormGroup;
  clicked: boolean= false;
 
  StructureSigle: string|undefined;
  isEmpty: boolean = true;
  loading: boolean = false;

  
   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Structures,
    private dialogRef:  MatDialogRef<AddSubstructureComponent>,    
    private openDialogService: OpenDialogService,
    private apiService: StructureControllerService, 
    private formBuilder: FormBuilder,    
    private toastr: ToastrService
  ) { 
    this.newStructureFormGroup = formBuilder.group(
      {
        name: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        sigle: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        description: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
        sup: new FormControl(this.data!.name),
      }
    );
  }

  ngOnInit(): void {
    this.StructureSigle = this.data.sigle;
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
      structureSuperieur: this.data
    };
  }

  onSaveNewWorkFow(){
    this.clicked=true;
    let body: Structures=this.initStructureBean();
    body.name = this.f["name"].value;
    body.sigle = this.f["sigle"].value;
    body.description = this.f["description"].value;
    body.structureSuperieur=this.data;
    this.newStructureFormGroup.reset();
    this.apiService.addSubStructures(body).toPromise().then(
      res => {
        this.toastr.success("true","Create");
        this.dialogRef.close(true);
      }
    ).catch(
      error => {
        console.log(error);
        this.f["sigle"].setValue(body.sigle); 
        this.f["name"].setValue(body.name); 
        this.f["description"].setValue(body.description);
        this.f["sup"].setValue(this.data!.name);
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
