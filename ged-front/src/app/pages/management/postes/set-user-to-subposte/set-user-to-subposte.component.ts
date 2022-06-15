import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { PageUsers, PosteControllerService, Postes, Users, UsersControllerService } from 'src/app/model';

@Component({
  selector: 'app-set-user-to-subposte',
  templateUrl: './set-user-to-subposte.component.html',
  styleUrls: ['./set-user-to-subposte.component.scss']
})
export class SetUserToSubposteComponent implements OnInit {

  workflows: string [] = ['User0'];

  postesList: string [] = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5','User 6', 'User 7', 'User 8', 'User 9', 'User 10'];

  
  posteName: string = "";
  userToAddListe: Array<Users>=[];
  userInPoste: Array<Users>=[];
  pageUsers!: PageUsers;
  workFlowSigle: string|undefined;
  isEmpty: boolean = true;
  loading: boolean = false;

   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Postes,
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiUsersService: UsersControllerService,   
    private apiService: PosteControllerService,    
    private toastr: ToastrService
    ) {
      this.posteName = this.data.name!;
     }

  ngOnInit(): void {
    this.apiUsersService.findAll1(1).toPromise().then(
      resp => {
       console.log(resp);
      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
      }
    );
  }


  onDrop(event: CdkDragDrop<string []>){
    if(event.previousContainer==event.container){
      if(event.container.data == this.postesList ){
        moveItemInArray(
          this.postesList ,
          event.previousIndex,
          event.currentIndex
        );
      }else if(event.container.data == this.workflows){
        moveItemInArray(
          this.workflows,
          event.previousIndex,
          event.currentIndex
        );
      }
    }else{
      if(event.previousContainer.data == this.postesList ){
        let user: string = this.workflows[0];
        transferArrayItem(
          this.postesList,
          this.workflows,
          event.previousIndex,
          event.currentIndex
        );        
        const index = this.workflows.indexOf(user);
        if (index !== -1) {
          this.workflows.splice(index, 1);
        }
        this.postesList.unshift(user);

      }else if(event.previousContainer.data == this.workflows){
        transferArrayItem(
          this.workflows,
          this.postesList,
          event.previousIndex,
          event.currentIndex
        );
      }

    }
  }
}
