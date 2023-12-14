import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { Postes, Structures } from 'src/app/model';
import { PosteControllerService } from 'src/app/model/api/posteController.service';

@Component({
  selector: 'app-create-poste',
  templateUrl: './create-poste.component.html',
  styleUrls: ['./create-poste.component.scss']
})
export class CreatePosteComponent implements OnInit {


  newPosteFormGroup!: FormGroup;
  clicked: boolean= false;
  
  
   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Structures,
    private loaderService: LoaderService,
    private apiService: PosteControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<CreatePosteComponent>
  ) { 
    this.newPosteFormGroup = formBuilder.group(
      {
        name: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        description: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
      }
    );
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.newPosteFormGroup.controls;
  }

  private initPosteBean(): Postes{
    return {
      idposte: undefined,
      name: undefined,
      active: true,
      description: undefined,
      posteSubalterne: undefined,
      posteSuperieur: undefined,
      structure:this.data,
    };
  }

  onSaveNewWorkFow(){
    this.clicked=true;
    let body: Postes=this.initPosteBean();
    body.name = this.f["name"].value;
    body.description = this.f["description"].value;
    this.newPosteFormGroup.reset();
    this.apiService.addPoste(body).subscribe(
      res => {
        this.toastr.success("true","Create");
        this.dialogRef.close(true);
      },
      error => {
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
