import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { FileUploadService } from 'src/app/loader/file-upload.service';
import { JwtRequest, LoginControllerService } from 'src/app/model';
import * as constant from '../../loader/constante';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  panelOpenState = false;
  totoo: boolean=false;
  color = "black";
  loginFormGroup!: FormGroup;
  clicked: boolean=true;
  src: string="http://localhost:3000";

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toast: ToastrService,   
    private apiServiceUser: LoginControllerService,
    private fileService: FileUploadService
    ) { 
      this.loginFormGroup = formBuilder.group(
        {
          username: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(3)]),
          password: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.minLength(2)]),
        }
      );
    }

  ngOnInit(): void {
    this.auth.disableHeaderBar();
    $(document).ready(function(){          
      $("#actions").resize(
        
      );   
    }); 
  }
  toto(){
    this.totoo=!this.totoo;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  private onHasRole(role:string): boolean{
    return this.auth.getRoles(role);
  }
  onLogin(){
    this.clicked=!this.clicked;
    let user: JwtRequest = this.initUserBean();
    user.username = this.f[constant.username].value;
    user.password = this.f[constant.password].value;
    this.apiServiceUser.createAuthenticationToken(user).subscribe(
      response=>{
        this.auth.saveUserLogin(response.RefreshToken);
        this.router.navigate(['dashboarduser']);
        /*
        if(this.onHasRole(constant.admin))
         
        else
          this.router.navigate([constant.manageIndexPath]);
*/
      }, error=>{       
        this.toast.warning(error.error,constant.warning)
        this.clicked=!this.clicked;
      }
    );
  }



  private initUserBean(): JwtRequest{
    return {
      password: undefined,
      username: undefined
    };
  }

}
