import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { LoaderService } from 'src/app/loader/loader.service';
import {  UsersControllerService, DroitsControllerService, } from 'src/app/model';
import * as constante from '../../../../loader/constante';

export interface UserPoste {
  idStructure?: number,
  idProfile?: number,
  profileName?: string,
  userName?: string,
  status?: boolean,
  directionName?: string,
  directionSigle?: string
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
    private apiServiceDroit: DroitsControllerService,
    private toastr: ToastrService ,
    private auth: AuthenticationService,
    private dialogRef:  MatDialogRef<ProfilComponent>
    ) { }

  ngOnInit(): void {
    this.editable = this.onHasRole(constante.admin);
    this.initData();
    
  }

  private onHasRole(role:string): boolean{
    return this.auth.getRoles(role);
  }

  setSatus(){
    this.listenToLoading();
    this.apiService.setProfileStatus(this.userData.idProfile!).subscribe(
      response =>{
        this.userData.status = !this.userData.status;
      },
      error=>{

      }
    );
  }


  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  /*private getDroit(){
    this.apiServiceDroit.findAllDroitUser(this.data.user).subscribe(
      response=>{
        this.pageDroits = response;
      },
      error=>{

      }
    );
  }*/

  private initData(){
    this.listenToLoading();
    this.apiService.findUserById(this.data.user).subscribe(
      response=>{
        this.isEmpty=false;
        this.listenToLoading();
        this.apiService.currentStructure(response.idProfiles!).subscribe(
          resp=>{
            if(response.currentUser==null)
              response.currentUser = "empty";
            if(resp==null){
              this.userData = {
                idStructure: undefined,
                  idProfile:response.idProfiles!,
                  profileName:response.name!,
                  userName: response.currentUser!,
                  status: response.status!,
                  directionName: "undefined",
                  directionSigle: "undefined"
              };
            }else{
              this.userData = {
                idStructure: resp.idStructure!,
                idProfile:response.idProfiles!,
                profileName:response.name!,
                userName: response.currentUser!,
                status: response.status!,
                directionName: resp.name!,
                directionSigle: resp.sigle!
              };
             
            }
           // this.getDroit();
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
