import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { PosteControllerService, Postes } from 'src/app/model';

@Component({
  selector: 'app-update-poste',
  templateUrl: './update-poste.component.html',
  styleUrls: ['./update-poste.component.scss']
})
export class UpdatePosteComponent implements OnInit {



  newPosteFormGroup!: FormGroup;
  clicked: boolean= false;
  
  
   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Postes,
    private loaderService: LoaderService,
    private apiService: PosteControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<UpdatePosteComponent>
  ) { 
    this.newPosteFormGroup = formBuilder.group(
      {
        name: new FormControl(this.data.name!, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        description: new FormControl(this.data.description!, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
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
      idposte: this.data.idposte!,
      name: this.data.name!,
      niveau: this.data.niveau!,
      description: this.data.description!,
      posteSubalterne: this.data.posteSubalterne!,
      posteSuperieur: this.data.posteSuperieur,
      groupslistes: this.data.groupslistes!,
      structure:this.data.structure!,
    };
  }

  onSaveNewWorkFow(){
    this.clicked=true;
    let body: Postes=this.initPosteBean();
    body.name = this.f["name"].value;
    body.description = this.f["description"].value;
    this.newPosteFormGroup.reset();
    this.apiService.add5(body,"Maire").toPromise().then(
      res => {
        this.toastr.success("true","Create");
        this.dialogRef.close();
      }
    ).catch(
      error => {
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
