import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { StructureControllerService, Structures } from 'src/app/model';
import * as constante from '../../../../loader/constante';

@Component({
  selector: 'app-create-structure',
  templateUrl: './create-structure.component.html',
  styleUrls: ['./create-structure.component.scss']
})
export class CreateStructureComponent implements OnInit {

  newStructureFormGroup!: FormGroup;
  clicked: boolean= constante.falseValue;
  constantes: any = constante;
  color = "#000000";
  
   
  constructor(
    private loaderService: LoaderService,
    private apiService: StructureControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.newStructureFormGroup = formBuilder.group(
      {
        name: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        sigle: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        description: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
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
      structureSuperieur: undefined,
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
    body.color = this.color;
    this.apiService.addStructures(body).subscribe(
      res => {
        this.toastr.success(constante.tokenDefaultValue,constante.create);
        this.router.navigate(["manage/structure"]);
      },error => {
        this.toastr.error(constante.error,constante.error);
        this.f[constante.sigleSearchValue].setValue(body.sigle); 
        this.f[constante.nameSearchValue].setValue(body.name); 
        this.f[constante.description].setValue(body.description);
        //this.color = '#000000';
        this.clicked = constante.falseValue;
      }
    );
  }
  onClose(){    
    this.router.navigate(["manage/structure"]);
  }

}
