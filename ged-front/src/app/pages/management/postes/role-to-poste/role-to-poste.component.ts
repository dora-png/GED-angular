import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
//import { PageRoles, PosteControllerService, Postes, Roles, RolesControllerService, GroupUser } from 'src/app/model';

@Component({
  selector: 'app-role-to-poste',
  templateUrl: './role-to-poste.component.html',
  styleUrls: ['./role-to-poste.component.scss']
})
export class RoleToPosteComponent implements OnInit {
/*
  posteName: string = "";
  groupToAddListe: Array<GroupUser>=[];
  groupInPoste: Array<GroupUser>=[];
  pageRoles!: PageRoles;
  workFlowSigle: string|undefined;
  isEmpty: boolean = true;
  loading: boolean = false;

   
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Postes,
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiService: PosteControllerService,   
    private apiRoleService: RolesControllerService,    
    private toastr: ToastrService
    ) {
      this.posteName = this.data.name!;
     }

     private init(){
      this.apiService.findPosteById(this.data.idposte!).toPromise().then(
        res => {
          this.groupInPoste = res?.groupslistes!;
         // this.apiRoleService.findRoleToAdd(1, res?.idposte!).toPromise().then(
           // resp => {
           //   this.pageRoles = resp!
           //   this.roleToAddListe = resp?.content!; 
           // }
         // ).catch(
         //   error => {
         //   }
          //).finally(
          //  () => {
         //   }
         // );
        }
      ).catch(
        error => {
        }
      ).finally(
        () => {
        }
      );
     }
    */
  ngOnInit(): void {
    //this.init();
  }
/*

  onDrop(event: CdkDragDrop<Roles []>){
    //if(event.previousContainer==event.container){
     // if(event.container.data == this.roleToAddListe ){
     //   moveItemInArray(
      //    this.roleToAddListe ,
      //    event.previousIndex,
      //    event.currentIndex
      //  );
      //}else if(event.container.data == this.roleInPoste){
      //  moveItemInArray(
      //    this.roleInPoste,
      ///    event.previousIndex,
       //   event.currentIndex
      //  );
     // }
   // }else{
    //  if(event.previousContainer.data == this.roleToAddListe ){//add role
        
    //    let posteRoleBean: PosteRoleBean={
     //     poste: this.data.idposte!,
     //     role:this.roleInPoste[event.currentIndex].name!
      //  };
     //   this.apiService.addroleposte(posteRoleBean,"Maire").toPromise().then(
      //    resp => {
     // /      transferArrayItem(
       //       this.roleToAddListe,
       //       this.roleInPoste,
       //       event.previousIndex,
       //       event.currentIndex
       //     );
        //    this.toastr.success("ok");
       //     this.init();
       //   }
       // ).catch(
       //   error => {
         //   alert("error");
        //  }
        //).finally(
        //  () => {
        //  }
        //);
      //}else if(event.previousContainer.data == this.roleInPoste){//remove role
        
       // let posteRoleBean: PosteRoleBean={
      //    poste: this.data.idposte!,
      //    role:this.roleInPoste[event.previousIndex].name!
      //  };
      // this.apiService.removeRoleToPoste(posteRoleBean).toPromise().then(
        //  resp => {
      //      transferArrayItem(
        //      this.roleInPoste,
         //     this.roleToAddListe,
         //     event.previousIndex,
         //     event.currentIndex
     //       );
     //       this.toastr.success("ok");
     //       this.init();
     //     }
     //   ).catch(
     //     error => {
      //      alert("error");
      //    }
      //  ).finally(
      //    () => {
       //   }
      //  );
     // }

    //}
  //}

 // private onNextPage(page: number){
   /// this.apiRoleService.findRoleToAdd( this.data.idposte!, page).toPromise().then(
    //  resp => {
    //    if(resp==null){
     //     this.isEmpty=true;
    //    }else{
   //       this.isEmpty=false;
   //       this.pageRoles = resp!
  //        this.groupToAddListe = resp?.content!; 
    //    }
        
 //     }
 //   ).catch(
  //    error => {
  //    }
   // ).finally(
   //   () => {
   //   }
    //);
  //}


  onNext(){
    this.onNextPage(this.pageRoles?.pageable?.pageNumber!+1);
  }

  onPreview(){
    this.onNextPage(this.pageRoles?.pageable?.pageNumber!-1);
  }

 */
}
