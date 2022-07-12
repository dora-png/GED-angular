import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { FileUploadService } from 'src/app/loader/file-upload.service';
import { LoginService } from 'src/app/loader/login.service';
import { Users } from 'src/app/model';
import * as constant from '../../loader/constante';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
///////////////////////////////////////////////

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
      console.log("event:",event);
      this.resportProgress(event);
    },
    (error: HttpErrorResponse) => {
      console.log("error:",error);
    }
  );
}

// define a function to download files
onDownloadFile(filename: string): void {
  /*this.fileService.download(filename).subscribe(
    event => {
      console.log(event);
      this.resportProgress(event);
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );*/
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



  /////////////////////////////////////
  loginFormGroup!: FormGroup;
  clicked: boolean=true;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: LoginService,
    private toast: ToastrService,
    private fileService: FileUploadService
    ) { 
      this.loginFormGroup = formBuilder.group(
        {
          username: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(3)]),
          password: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        }
      );
    }

  ngOnInit(): void {
    this.auth.disableHeaderBar();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }
  onLogin(){
    this.clicked=!this.clicked;
    let user: Users = this.initUserBean();
    user.username = this.f[constant.username].value;
    user.password = this.f[constant.password].value;
    this.http.login(user).subscribe(
      response=>{
        this.auth.saveUserLogin(response.RefreshToken);
        this.router.navigate([constant.manageIndex]);
      }, error=>{       
        this.toast.warning(error.error,constant.warning)
        this.clicked=!this.clicked;
      }
    );
  }



  private initUserBean(): Users{
    return {
      iduser: undefined,
      name: undefined,
      password: undefined,
      dateCreation: undefined,
      status: undefined,
      username: undefined,
    };
  }

}
