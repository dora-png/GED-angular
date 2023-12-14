import { Component, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { AuthenticationService } from '../loader/authentication.service';
import { LoaderService } from '../loader/loader.service';
import { OpenDialogService } from '../loader/open-dialog.service';
import { ProfilComponent } from '../pages/management/users/profil/profil.component';
import * as constante from '../loader/constante';
import { Router } from '@angular/router';
import { FileUploadService } from '../loader/file-upload.service';
import { UploadFolderComponent } from '../utils/upload-folder/upload-folder.component';
import { SingleFileComponent } from '../utils/single-file/single-file.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  color: string="aqua";
  name: string="";
  sigle: string="";
  isLogged: boolean = false;
  constantes: any = constante;
  loading: boolean = true;
  private isLoggedSubscription: Subscription | undefined;
  logging: boolean = false;
  message: string | null = null;

  
  constructor(
    private loaderService: LoaderService,
    private auth: AuthenticationService,
    private route: Router,
    private openDialog: OpenDialogService,
    private fileService: FileUploadService
    ) {
      
     }

     getColor(){
      return "background-color: "+this.color+";"
     }

  ngOnInit(): void {  
    this.isLoggedSubscription = this.auth.isUserSubject.subscribe(
      (isLogged: boolean)=>{
        this.isLogged=isLogged;
      }
    );  

    this.auth.colorSubject
    .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
    .subscribe((color) => {
      this.color = color;
    });
    this.auth.nameSubject
    .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
    .subscribe((name) => {
      this.name = name;
    });

    this.auth.sigleSubject
    .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
    .subscribe((sigle) => {
      this.sigle = sigle;
    });
  }

  onHasRole(role:string): boolean{
    return this.auth.getRoles(role);
  }

  listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
  onProfil(){
    this.openDialog.openDialog(ProfilComponent);
  }
  onLogOut(){
    this.auth.logout();
  }
  
/*

  color: string="aqua";
  name: string="";
  sigle: string="";
  isLogged: boolean = false;
  constantes: any = constante;
  loading: boolean = true;
  private isLoggedSubscription: Subscription | undefined;
  logging: boolean = false;
  message: string | null = null;
  login: string="";

  
  constructor(
    private loaderService: LoaderService,
    private auth: AuthenticationService,
    private route: Router,
    private openDialog: OpenDialogService,
    private fileService: FileUploadService
    ) {
      
     }

     getColor(){
      return "background-color: "+this.color+";"
     }

  ngOnInit(): void {  
    this.isLoggedSubscription = this.auth.isUserSubject.subscribe(
      (isLogged: boolean)=>{
        this.isLogged=isLogged;
      }
    );  
    this.color = this.auth.getColor();
    this.login = this.auth.getLogin();
    this.name = this.auth.getName();
    this.sigle = this.auth.getSigle();
    console.log(this.auth.getAllRoles())
    console.log(this.color)
    console.log(this.login)
    console.log(this.name)
    console.log(this.sigle)
  }

  onHasRole(role:string): boolean{
    return this.auth.getRoles(role);
  }

onAddFolder(){
  this.openDialog.openDialog(UploadFolderComponent);
}

onAddMultipleFiles(){
  this.route.navigate(['download-folder']);
}

onAddSingleFile(){
  this.route.navigate(['download-file']);
}

createWordFile(){
  this.openDialog.openDialog(SingleFileComponent);
}

createExcelFile(){
  this.openDialog.openDialog(SingleFileComponent);
}

  listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
  onProfil(){
    this.openDialog.openDialog(ProfilComponent);
  }
  onLogOut(){
    this.auth.logout();
  }
  


*/
}
