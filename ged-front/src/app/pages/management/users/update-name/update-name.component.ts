import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { UsersControllerService } from 'src/app/model';

@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.component.html',
  styleUrls: ['./update-name.component.scss']
})
export class UpdateNameComponent implements OnInit {
  newProfileFormGroup!: FormGroup;
  clicked: boolean= false;
  valid: boolean= false;

  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private loaderService: LoaderService,
    private apiService: UsersControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<UpdateNameComponent>
  ) { 
    this.newProfileFormGroup = formBuilder.group(
      {
        name: new FormControl(this.data.nameProfile, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      }
    );
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.newProfileFormGroup.controls;
  }

  onClose(){
    this.closeModal(false);
  }

  private closeModal(value: boolean){
    this.dialogRef.close(value);
  }

  onChangeInput(event: any){
    if(event.target.value.trim() == this.data.nameProfile.trim()){
      this.valid = false;
    }else{
      this.valid = this.newProfileFormGroup.valid;
    }
  }

  updateProfileName(){
    this.apiService.setProfileName(this.data.idProfile, this.f["name"].value.trim()).subscribe(
      response => {
        this.toastr.success("true","Create");
        this.closeModal(true);
      },
      error => {
        this.toastr.error("","Error");
        this.clicked = false;
      }
    );
    
  }


}
