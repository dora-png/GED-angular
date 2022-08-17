import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { UsersControllerService, Profiles,  } from 'src/app/model';

interface TypeProfile {
  value: string;
  name: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  newProfileFormGroup!: FormGroup;
  clicked: boolean= false;
  isEmpty: boolean= true;
  valid: boolean= false;
  touched: boolean= false;
  selectedValue: string | undefined;
  
  typeProfiles: TypeProfile[] = [
    {value: Profiles.TypeprofilEnum.EXTERNACTOR, name: Profiles.TypeprofilEnum.EXTERNACTOR},
    {value: Profiles.TypeprofilEnum.INTERNACTOR, name: Profiles.TypeprofilEnum.INTERNACTOR},
  ];
  constructor(
    private loaderService: LoaderService,
    private apiService: UsersControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<AddUserComponent>
  ) { 
    this.newProfileFormGroup = formBuilder.group(
      {
        name: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      }
    );
  }

  ngOnInit(): void {    
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.newProfileFormGroup.controls;
  }

  private initProfileBean(): Profiles{
    return {
      name: undefined,
      currentUser: undefined,
      typeprofil: undefined,
      status: undefined,
      dateCreation: undefined,
      idProfiles: undefined,
    };
  }
  onClose(){
    this.closeModal(false);
  }

  private closeModal(value: boolean){
    this.dialogRef.close(value);
  }
  private addProfile(body: Profiles){
    this.apiService.addUsers(body).subscribe(
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
  saveProfile(){
    this.clicked=true;
    let body: Profiles=this.initProfileBean();
    body.name = this.f["name"].value;
    if(this.selectedValue === Profiles.TypeprofilEnum.EXTERNACTOR){
      body.typeprofil = Profiles.TypeprofilEnum.EXTERNACTOR;
      this.addProfile(body);
    }else if(this.selectedValue === Profiles.TypeprofilEnum.INTERNACTOR){
      body.typeprofil = Profiles.TypeprofilEnum.INTERNACTOR;
      this.addProfile(body);
    }else{
      this.clicked = false;
    }
  }

  onTouch(){
    this.touched = true;
  }

  onChange(event: string){
    this.isEmpty = false;
    this.selectedValue = event;
    if(this.newProfileFormGroup.valid){
      this.valid = true;
    }
  }

  onChangeInput(event: any){
    if(this.isEmpty==false && this.newProfileFormGroup.valid){
      this.valid = true;
    }else{
      this.valid = false;
    }
  }
  
}
