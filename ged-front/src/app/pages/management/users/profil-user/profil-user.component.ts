import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersControllerService } from 'src/app/model';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.scss']
})
export class ProfilUserComponent implements OnInit {

  
  userLists!: string[];
  currentUser!: string ;
  valid: boolean= true;
  isEmpty: boolean= true;
  loading: boolean= true;
  clicked: boolean= false;

  constructor(    
    @Inject(MAT_DIALOG_DATA) private data: string,
    private apiService: UsersControllerService,
    private dialogRef:  MatDialogRef<ProfilUserComponent>
  ) { }

  ngOnInit(): void {
    this.currentUser = this.data;
    this.init(0,5); 
  }

  addUserToProfile(user: string){
    this.currentUser = user;
    this.valid = false;
  }
  containUser(user: string){
    return user === this.currentUser;
  }
  removeUser(user: string){  
    if(this.currentUser == user) { 
      this.currentUser = 'None';
      this.valid = true;
    }
  }

  private initUser(): string {
    return 'Empty'
  }

  private init(page: number, size: number) {
    this.loading = true;
    this.apiService.findAllUserToAdd().subscribe(
      response=>{
        if(response==null){
          this.isEmpty = true;
        }else{
          this.isEmpty = false;
          this.userLists = response;
        }        
        this.loading = false;
      },
      error=>{
        this.loading = false;
      }
    );    
  }


  
  onClose(){
    this.dialogRef.close(this.data);
  }

  onReset(){
    this.currentUser = this.initUser();
    this.valid = true;
  }

  save(){
    this.dialogRef.close(this.currentUser);
  }



}
