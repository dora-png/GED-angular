import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { DroitsControllerService, UsersControllerService } from 'src/app/model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  isEmpty: boolean = true;
  userLists!: string[];
  currentUser: string = "" ;
  loading: boolean = true;
  clicked: boolean = false;


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private loaderService: LoaderService,
    private toastr: ToastrService,
    private dialogRef:  MatDialogRef<UpdateUserComponent>, 
    private apiServiceProfile: UsersControllerService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.data.userNameProfile;
    this.listenToLoading();
    this.init(0,5);
  }

  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  addUserToProfile(user: string){
    this.currentUser = user;
  }
  containUser(user: string){
    return user === this.currentUser;
  }

  removeUser(user: string){  
    if(this.currentUser == user)  
      this.currentUser = this.data.userNameProfile;
  }


  private init(page: number, size: number) {
    this.apiServiceProfile.findAllUserToAdd().subscribe(
      response=>{
        if(response==null){
          this.isEmpty = true;
          
        }else{
          this.isEmpty = false;
          this.userLists = response;
        }
        
      },
      error=>{

      }
    );
  }

  changePageAndSize(event: any){
    this.init(event.page,5);
  }

  onClose(){
    this.closeModal(false);
  }

  private closeModal(value: boolean){
    this.dialogRef.close(value);
  }

  saveProfileUser(){
    if(this.currentUser == this.data.userNameProfile){      
      this.toastr.info("","Infos");
    }else{
      this.apiServiceProfile.setProfileUser(this.data.idProfile, this.currentUser).subscribe(
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

}
