import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { LoginService } from 'src/app/loader/login.service';
import { Users } from 'src/app/model';
import * as constant from '../../loader/constante';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;
  clicked: boolean=true;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: LoginService,
    private toast: ToastrService
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
        this.auth.enableHeaderBar();
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
