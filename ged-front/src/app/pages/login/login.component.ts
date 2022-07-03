import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { LoginService } from 'src/app/loader/login.service';
import { Users } from 'src/app/model';

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
    private http: LoginService
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
    user.username = this.f["username"].value;
    user.password = this.f["password"].value;
    this.http.login(user).toPromise().then(
      response=>{
        this.auth.enableHeaderBar();
        this.router.navigate(['manage/workflow']);
      }
    ).catch(
      error=>{        
        console.log(error);
        this.clicked=!this.clicked;
      }
    ).finally(
      () => {
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
