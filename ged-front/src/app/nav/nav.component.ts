import { Component, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { AuthenticationService } from '../loader/authentication.service';
import { LoaderService } from '../loader/loader.service';
import { OpenDialogService } from '../loader/open-dialog.service';
import { ProfilComponent } from '../pages/management/users/profil/profil.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isLogged: boolean = false;
  
  loading: boolean = true;
  private isLoggedSubscription: Subscription | undefined;
  logging: boolean = false;
  message: string | null = null;
  
  constructor(
    private loaderService: LoaderService,
    private auth: AuthenticationService,
    private openDialog: OpenDialogService
    ) {
      
     }

  ngOnInit(): void {  
    this.isLoggedSubscription = this.auth.isUserSubject.subscribe(
      (isLogged: boolean)=>{
        this.isLogged=isLogged;
      }
    );  
   /* this.listenToLogging();
    this.listenToLoading();*/
  }

  listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  /*listenToLogging(): void {
    this.loaderService.isloggingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((logging) => {
        this.logging = logging;
      });
  }

  listenToMessage(): void {
    this.loaderService.isloggingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((logging) => {
        this.logging = logging;
      });
  }*/
  onProfil(){
    this.openDialog.openDialog(ProfilComponent);
  }



}
