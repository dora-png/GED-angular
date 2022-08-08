import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { Postes } from 'src/app/model';

@Component({
  selector: 'app-read-poste',
  templateUrl: './read-poste.component.html',
  styleUrls: ['./read-poste.component.scss']
})
export class ReadPosteComponent implements OnInit {

/*

  newPosteFormGroup!: FormGroup;
  clicked: boolean= false;
  
  
   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Postes,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<ReadPosteComponent>
  ) { 
    this.newPosteFormGroup = formBuilder.group(
      {
        name: new FormControl(this.data.name!, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        description: new FormControl(this.data.description!, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
      }
    );
  }
*/
  ngOnInit(): void {
  }
/*
  private initPosteBean(): Postes{
    return {
      idposte: this.data.idposte!,
      name: this.data.name!,
     // niveau: this.data.niveau!,
      description: this.data.description!,
      posteSubalterne: this.data.posteSubalterne!,
      posteSuperieur: this.data.posteSuperieur,
      groupslistes: this.data.groupslistes!,
      structure:this.data.structure!,
    };
  }
  onClose(){
    this.dialogRef.close(false);
  }

*/
}
