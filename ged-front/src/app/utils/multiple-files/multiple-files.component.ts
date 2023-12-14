import { Component, Inject, OnInit } from '@angular/core';
import * as constant from '../../loader/constante';
import { saveAs } from 'file-saver';
import { FileUploadService } from 'src/app/loader/file-upload.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/loader/authentication.service';

@Component({
  selector: 'app-multiple-files',
  templateUrl: './multiple-files.component.html',
  styleUrls: ['./multiple-files.component.scss']
})
export class MultipleFilesComponent implements OnInit {
  
  color = "#4c97cb";
  errorMessage: string = "";
  
/*
filenames: string[] = [];
fileStatus = { status: '', requestType: '', percent: 0 };
formData = new FormData();

// define a function to upload files
onUploadFiles(event: any): void {
  let output = document.getElementById("example-list")!;
  let files = event!.target!.files;
  for (let i=0; i<files.length; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "example-box1");
    item.innerHTML = '<span> '+(i+1)+'-> '+files[i].webkitRelativePath+'</span>';
    output.appendChild(item);
    this.formData.append('files', files[i], files[i].webkitRelativePath);
  };
  this.fileService.upload(formData).subscribe(
    event => {
      console.log("event:",event);
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


*/
  /////////////////////////////////////
  newFolderFormGroup!: FormGroup;
  files: any[] = [];
  desableBox: boolean=false;
  private userLogin: string = "";
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: string,
      private fileService: FileUploadService,
      private auth: AuthenticationService,
      private dialogRef:  MatDialogRef<MultipleFilesComponent>
    ) { 
      this.userLogin = this.auth.loginUser; 
      this.newFolderFormGroup = formBuilder.group(
        {
          file: new FormControl(null, [Validators.requiredTrue]),
        }
      );
    }

  ngOnInit(): void {
    this.dialogRef.updateSize('250px','250px');
  }
  
  onReset(){
    this.newFolderFormGroup.reset();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.newFolderFormGroup.controls;
  }
  /**
   * handle file from browsing
   */
  fileBrowseHandler(event: any) {
    this.files=[];
    for (const item of event.target.files) {
      this.files.push(
        {
          file:item,
          progress:0
        }
      );
    }  
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }


  uploadFolder(){
    this.uploadFilesSimulator(0);
  }

  private uploadFilesSimulator(index: number) {
    if(this.data===""){
      if (index === this.files.length) {
        return;
      } else {
        let formData = new FormData();
        for (let i in this.files) {
          formData.delete('files');
          formData.append('files', this.files[i].file, this.files[i].file.webkitRelativePath);
          this.fileService.uploadUserUploadMulti(formData, this.userLogin).subscribe(
            event => {
              this.resportProgress(event,i);
            },
            (error: HttpErrorResponse) => {
              this.color = "#f11c1c";
              this.errorMessage = error.error.message;
            }
          );
        } 
      }
    }else{
      if (index === this.files.length) {
        return;
      } else {
        let formData = new FormData();
        for (let i in this.files) {
          formData.delete('files');
          formData.append('files', this.files[i].file, this.files[i].file.webkitRelativePath);
          this.fileService.uploadUserUploadMulti(formData, this.userLogin, this.data).subscribe(
            event => {
              this.resportProgress(event,i);
            },
            (error: HttpErrorResponse) => {
              this.color = "#f11c1c";
              this.errorMessage = error.error.message;
            }
          );
        } 
      }
    }  
    this.desableBox = false ;
    
  }

  private resportProgress(httpEvent: HttpEvent<string[] | Blob>, index: string): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.color = "#4c97cb";
        this.updateStatus(httpEvent.loaded, httpEvent.total!, parseInt(index));
        break;
      case HttpEventType.ResponseHeader:
        if(httpEvent.status === 200){
          this.dialogRef.close(true);
        }
        break;
      case HttpEventType.Response:        
        if (httpEvent.body instanceof Array) {
          this.dialogRef.close(true);
        } else {
         
        }
        break;
      default:
        break;      
    }
    /* switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, parseInt(index));
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          //this.fileStatus.status = 'done';
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
     //   this.fileStatus.status = 'done';
        break;
        default:
          console.log(httpEvent);
          break;
      
    } */
  }
  
  private updateStatus(loaded: number, total: number, index: number): void {
    this.files[index].progress = Math.round(100 * loaded / total);
  }
  
  

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    let decimals: any = 2;
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  onClose(){
    this.dialogRef.close(false);
  }
}
