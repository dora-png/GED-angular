import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { LogPosteUserControllerService, Users, UsersControllerService } from 'src/app/model';
export interface UserPoste {
  idUser?: number,
  loginUser?: string,
  nameUser?: string,
  idPoste?: number,
  namePoste?: string,
  direction?: string
} 

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  
  editable: boolean = false;  
  loading: boolean = false;
  isEmpty: boolean = true;
  userData!: UserPoste;

  constructor(  
    private loaderService: LoaderService,
    @Inject(MAT_DIALOG_DATA) private data: any,    
    private apiService: UsersControllerService,
    private apiLogService: LogPosteUserControllerService,
    private toastr: ToastrService ,
    private dialogRef:  MatDialogRef<ProfilComponent>
    ) { }

  ngOnInit(): void {
    this.initData();
    this.editable = this.data.editable;
  }

  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  private initData(){
    this.listenToLoading();
    this.apiService.findUserById(this.data.user).subscribe(
      response=>{
        this.isEmpty=false;
        this.listenToLoading();
        this.apiLogService.currentPosteOfUser(response.iduser!).subscribe(
          resp=>{
            if(resp==null){
              this.userData = {
                idPoste:undefined,
                idUser:response.iduser!,
                namePoste:"None",
                loginUser:response.username!,
                nameUser:response.name!,
                direction:"None"
              };
            }
            else{
              this.userData = {
                idPoste:resp.idposte!,
                idUser:response.iduser!,
                namePoste:resp.name!,
                loginUser:response.username!,
                nameUser:response.name!,
                direction: resp.structure!.name!+" (" +resp.structure!.sigle!+")"
              }
            }
          },
          error=>{  
          }
        );
      },
      error=>{
        this.toastr.info(error.error.message, "Infos");
        this.dialogRef.close(false);
      }
    );
  }

  onClose(){
    this.dialogRef.close(this.editable);
  }

}
