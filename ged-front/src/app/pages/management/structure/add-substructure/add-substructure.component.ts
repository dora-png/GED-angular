import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import * as constante from '../../../../loader/constante';
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
  constantes: any = constante;
  clicked: boolean= constante.falseValue;
  color = "#000000";
  StructureSigle: string|undefined;
  isEmpty: boolean = constante.trueValue;
  loading: boolean = constante.falseValue;

  
   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Structures,
    private dialogRef:  MatDialogRef<AddSubstructureComponent>, 
    private apiService: StructureControllerService, 
    private formBuilder: FormBuilder,    
    private toastr: ToastrService
  ) { 
    this.newStructureFormGroup = formBuilder.group(
      {
        name: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        sigle: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        description: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
        structureSup: new FormControl(this.data!.name),
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
      structureSuperieur: this.data,
      active: constante.trueValue,
      color: undefined,
      dateCreation: undefined,
      profiles:[]
    };
  }

  desableButton(){
    if(this.newStructureFormGroup.valid && this.color != '#000000')
      return false;
    return true;
  }
  onSaveNewStructure(){
    this.clicked=constante.trueValue;
    let body: Structures=this.initStructureBean();
    body.name = this.f[constante.nameSearchValue].value;
    body.sigle = this.f[constante.sigleSearchValue].value;
    body.description = this.f[constante.description].value;
    body.structureSuperieur=this.data;
    body.color = this.color;
    this.apiService.addSubStructures(body).subscribe(
      res => {
        this.toastr.success(constante.tokenDefaultValue,constante.create);
        this.dialogRef.close(constante.trueValue);
      },
      error => {
        this.toastr.error(constante.tokenDefaultValue,constante.error);
        this.f[constante.sigleSearchValue].setValue(body.sigle); 
        this.f[constante.nameSearchValue].setValue(body.name); 
        this.f[constante.description].setValue(body.description);
        this.f[constante.structureSup].setValue(this.data!.name);
        this.color = '#000000';
        this.clicked = false;
      }
    );
  }
  onClose(){
    this.dialogRef.close(false);
  }
 



}
