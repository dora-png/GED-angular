import { Component, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { AuthenticationService } from '../loader/authentication.service';
import { LoaderService } from '../loader/loader.service';
import { OpenDialogService } from '../loader/open-dialog.service';
import { ProfilComponent } from '../pages/management/users/profil/profil.component';
import * as constante from '../loader/constante';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { FileUploadService } from '../loader/file-upload.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isLogged: boolean = false;
  constantes: any = constante;
  loading: boolean = true;
  private isLoggedSubscription: Subscription | undefined;
  logging: boolean = false;
  message: string | null = null;
  filenames: string[] = [];
fileStatus = { status: '', requestType: '', percent: 0 };


// define a function to upload files
onUploadFiles(event: any): void {
  let output = document.getElementById("listing")!;
  const formData = new FormData();
  let files = event!.target!.files;
  for (let i=0; i<files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
    formData.append('files', files[i], files[i].name);
  };
  this.fileService.upload(formData).subscribe(
    event => {
      this.resportProgress(event);
    },
    (error: HttpErrorResponse) => {
      console.log("error:",error);
    }
  );
}
private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
  switch(httpEvent.type) {
    case HttpEventType.UploadProgress:
      this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
      break;
    case HttpEventType.DownloadProgress:
      this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
      break;
    case HttpEventType.ResponseHeader:
      console.log('Header returned', httpEvent);
      break;
    case HttpEventType.Response:
      if (httpEvent.body instanceof Array) {
        this.fileStatus.status = 'done';
        for (const filename of httpEvent.body) {
          this.filenames.unshift(filename);
        }
      } else {
        saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
        // saveAs(new Blob([httpEvent.body!], 
        //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
        //    httpEvent.headers.get('File-Name'));
      }
      this.fileStatus.status = 'done';
      break;
      default:
        console.log(httpEvent);
        break;
    
  }
}

private updateStatus(loaded: number, total: number, requestType: string): void {
  this.fileStatus.status = 'progress';
  this.fileStatus.requestType = requestType;
  this.fileStatus.percent = Math.round(100 * loaded / total);
}
  constructor(
    private loaderService: LoaderService,
    private auth: AuthenticationService,
    private route: Router,
    private openDialog: OpenDialogService,
    private fileService: FileUploadService
    ) {
      
     }

  ngOnInit(): void {  
    this.isLoggedSubscription = this.auth.isUserSubject.subscribe(
      (isLogged: boolean)=>{
        this.isLogged=isLogged;
      }
    );  
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
  



}
