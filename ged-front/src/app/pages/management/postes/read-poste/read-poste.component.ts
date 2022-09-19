import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogPosteUserControllerService, Postes, Profiles } from 'src/app/model';

@Component({
  selector: 'app-read-poste',
  templateUrl: './read-poste.component.html',
  styleUrls: ['./read-poste.component.scss']
})
export class ReadPosteComponent implements OnInit {

  clicked: boolean= false;
  poste!: Postes;
  profile!: Profiles;
  loadingProfile: boolean=true;
  
  
   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Postes,
    private api: LogPosteUserControllerService,
    private dialogRef:  MatDialogRef<ReadPosteComponent>
  ) { 
  }

  ngOnInit(): void {
    this.poste = this.data;
    this.loadingProfile = true;
    this.api.currentUserOfPoste(this.data.idposte!).subscribe(
      response=>{
        if(response !=null){
          this.profile = response;
        }
        this.loadingProfile = false;
      }
    );
  }

  /*private initPosteBean(): Postes{
    return {
      idposte: this.data.idposte!,
      name: this.data.name!,
     // niveau: this.data.niveau!,
      description: this.data.description!,
      posteSubalterne: this.data.posteSubalterne!,
      posteSuperieur: this.data.posteSuperieur,
      dateCreation: this.data.groupslistes!,
      structure:this.data.structure!,
    };
  }*/
  onClose(){
    this.dialogRef.close(false);
  }


}
