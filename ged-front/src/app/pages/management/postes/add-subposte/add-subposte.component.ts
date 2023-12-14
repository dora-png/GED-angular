import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { PosteControllerService, Postes } from 'src/app/model';

@Component({
  selector: 'app-add-subposte',
  templateUrl: './add-subposte.component.html',
  styleUrls: ['./add-subposte.component.scss']
})
export class AddSubposteComponent implements OnInit {
  newPosteFormGroup!: FormGroup;
  clicked: boolean= false;
  
   
    constructor(
    @Inject(MAT_DIALOG_DATA) private data: Postes,
    private loaderService: LoaderService,
    private apiService: PosteControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<AddSubposteComponent>
  )  {
    this.newPosteFormGroup = formBuilder.group(
      {
        name: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        description: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
        sup: new FormControl(this.data!.name),
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
      posteSuperieur: this.data!,
      dateCreation : undefined,
      structure:this.data!.structure!,
    };
  }

  onSaveNewWorkFow(){
    this.clicked=true;
    let body: Postes=this.initPosteBean();
    body.name = this.f["name"].value;
    body.description = this.f["description"].value;
    this.newPosteFormGroup.reset();
    this.apiService.addSubPoste(body).toPromise().then(
      res => {
        this.toastr.success("true","Create");
        this.dialogRef.close(true);
      }
    ).catch(
      error => {
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
