import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { Postes, Structures } from 'src/app/model';

@Component({
  selector: 'app-read-structure',
  templateUrl: './read-structure.component.html',
  styleUrls: ['./read-structure.component.scss']
})
export class ReadStructureComponent implements OnInit {

  newStructureFormGroup!: FormGroup;  
  structurePosteList: Array<Postes>=[];
  structureSupEmpty: boolean= false;
  isValid: boolean=true;
  sousStructureList: Array<Structures>=[];
  sousStructureEmpty: boolean=false;
  structurePosteEmpty: boolean=false;
  nameStructure: string="";
  
  
   
  constructor(    
    @Inject(MAT_DIALOG_DATA) private data: Structures,
    private formBuilder: FormBuilder,
    
    private dialogRef:  MatDialogRef<ReadStructureComponent>
  ) { 
    
    this.nameStructure = this.data.name!;
    this.newStructureFormGroup = formBuilder.group(
      {
        name: new FormControl(this.data.name!, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        sigle: new FormControl(this.data.sigle!, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        description: new FormControl(this.data.description!, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
        structureSup: new FormControl(null)
      }
    );
    if(this.data.sousStructure!.length<=0){
      this.sousStructureEmpty=false;
    }else{
      this.sousStructureEmpty=true;
      this.sousStructureList=this.data.sousStructure!;
    }
    if(this.data.postes!.length<=0){
      this.structurePosteEmpty=false;
    }else{
      this.structurePosteEmpty=true;
      this.structurePosteList=this.data.postes!;
    }
    if(this.data.structureSuperieur==null){
      this.structureSupEmpty=false;
    }else{
      this.newStructureFormGroup.controls['structureSup'].setValue(this.data.structureSuperieur!.name+"("+this.data.structureSuperieur!.sigle+")");
      this.structureSupEmpty=true;
    }
  }
  ngOnInit() {
  }

  onClose(){
    this.dialogRef.close(false);
  }
  

}
