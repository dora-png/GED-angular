import { Component, Inject, OnInit } from '@angular/core';
import * as constant from '../../loader/constante';
import { saveAs } from 'file-saver';
import { FileUploadService } from 'src/app/loader/file-upload.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-single-file',
  templateUrl: './single-file.component.html',
  styleUrls: ['./single-file.component.scss']
})
export class SingleFileComponent implements OnInit {
  newFolderFormGroup!: FormGroup;
  files: any[] = [];
  desableBox: boolean=false;
  private userLogin: string = "";
  color = "#4c97cb";
  errorMessage: string = "";
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: string,
    private formBuilder: FormBuilder,
    private fileService: FileUploadService,
    private auth: AuthenticationService,
    private dialogRef:  MatDialogRef<SingleFileComponent>
  ) { 
      this.userLogin = this.auth.loginUser; 
      this.newFolderFormGroup = formBuilder.group(
        {
          file: new FormControl(null, [Validators.requiredTrue]),
        }
      );
    }

  ngOnInit(): void {
    /*this.auth.loginSubject
    .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
    .subscribe((sigle) => {
      this.userLogin = sigle;
    });*/
    
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


  uploadFile(){
    this.uploadFilesSimulator(0);
  }

  private uploadFilesSimulator(index: number) {    
    this.desableBox = true ;
    this.formatBytes(this.files[index]?.file?.size)
    if(this.data===""){
      if (index === this.files.length) {
        return;
      } else {
        let formData = new FormData();
          formData.delete('files');
          formData.append('files', this.files[0].file, this.files[0].file.name);
          this.fileService.uploadUserUpload(formData, this.userLogin).subscribe(
            event => {
              this.resportProgress(event,"0");
            },
            (error: HttpErrorResponse) => {
              this.color = "#f11c1c";
              this.errorMessage = error.error.message;
            }
          );
      }  
    }else{
      if (index === this.files.length) {
        return;
      } else {
        let formData = new FormData();
          formData.delete('files');
          formData.append('files', this.files[0].file, this.files[0].file.name);
          this.fileService.uploadUserUpload(formData, this.userLogin, this.data).subscribe(
            event => {
              this.resportProgress(event,"0");
            },
            (error: HttpErrorResponse) => {
              this.color = "#f11c1c";
              this.errorMessage = error.error.message;
            }
          );
        
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
