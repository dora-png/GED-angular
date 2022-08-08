import { Component, OnInit } from '@angular/core';
import * as constant from '../../loader/constante';
import { saveAs } from 'file-saver';
import { FileUploadService } from 'src/app/loader/file-upload.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-file',
  templateUrl: './single-file.component.html',
  styleUrls: ['./single-file.component.scss']
})
export class SingleFileComponent implements OnInit {
  newFolderFormGroup!: FormGroup;
  files: any[] = [];
  desableBox: boolean=false;
  constructor(
    private formBuilder: FormBuilder,
      private fileService: FileUploadService
    ) { 
      this.newFolderFormGroup = formBuilder.group(
        {
          file: new FormControl(null, [Validators.requiredTrue]),
        }
      );
    }

  ngOnInit(): void {
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
    if (index === this.files.length) {
      return;
    } else {
      this.desableBox = true ;
      let loginUser: string = "admin";
      let formData = new FormData();
      for (let i in this.files) {
        formData.delete('files');
        formData.append('files', this.files[i].file, this.files[i].file.name);
        this.fileService.upload(formData, loginUser).subscribe(
          event => {
            this.resportProgress(event,i);
          },
          (error: HttpErrorResponse) => {
            console.log("error:",error);
          }
        );
      } 
    }
  }

  private resportProgress(httpEvent: HttpEvent<string[] | Blob>, index: string): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, parseInt(index));
        break;
      /*case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;*/
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          //this.fileStatus.status = 'done';
          /*for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }*/
        } else {
          /*saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                  {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));*/
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
     //   this.fileStatus.status = 'done';
        break;
        default:
          console.log(httpEvent);
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
}
