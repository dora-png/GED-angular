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
import 'jquery-ui';
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
    /*$(document).ready(function(){   
      document.addEventListener("contextmenu", function(event){
        // On a ouvert le menu
        // On empêche le "vrai" menu d'apparaître
        event.preventDefault();

        // On récupère le menu
        let menu = document.querySelector("#context-menu")!;

        // On met ou retire la classe active
        menu!.classList.toggle("active");

        // On ouvre le menu là où se trouve la souris
        // On récupère les coordonnées de la souris
        let posX = event.clientX;
        let posY = event.clientY;

        alert(posX)

        // On calcule la position du menu pour éviter qu'il dépasse
        // Position la plus à droite "largeur fenêtre - largeur menu - 25"
        let maxX = window.innerWidth - menu!.clientWidth - 25;

        // Position la plus basse "hauteur fenêtre - hauteur menu - 25"
        let maxY = window.innerHeight - menu!.clientHeight - 25;

        // On vérifie si on dépasse
        if(posX > maxX){
            posX = maxX;
        }
        if(posY > maxY){
            posY = maxY;
        }

        // On positionne le menu4
        menu.setAttribute("top", posY + "px");
        menu.setAttribute("left", posX + "px");
        menu!.style.top! = posY + "px";
        menu!.style!.left! = posX + "px";
    });

    // On écoute le clic pour retirer le menu
    document.addEventListener("click", function(){
        // On va chercher le menu et on lui retire la classe "active"
        document!.querySelector("#context-menu")!.classList.remove("active");
    });
    }); */
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
      }, error=>{
        if(error.status== 400){
          this.toast.warning(error.error,constant.warning)
        }else{
          this.toast.error("Check your connexion",constant.error)    
        }
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
