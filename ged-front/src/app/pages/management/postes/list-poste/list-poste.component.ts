import { Component, Inject, OnInit } from '@angular/core';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { CreatePosteComponent } from '../create-poste/create-poste.component';
import { SetUserToSubposteComponent } from '../set-user-to-subposte/set-user-to-subposte.component';
import { UpdatePosteComponent } from '../update-poste/update-poste.component';
import { ReadPosteComponent } from '../read-poste/read-poste.component';
import { AddSubposteComponent } from '../add-subposte/add-subposte.component';
import { RoleToPosteComponent } from '../role-to-poste/role-to-poste.component';
import { PosteControllerService, PagePostes, Structures, Postes } from '../../../../model/index';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { delay } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-list-poste',
  templateUrl: './list-poste.component.html',
  styleUrls: ['./list-poste.component.scss']
})
export class ListPosteComponent implements OnInit {

  pagePostes!: PagePostes;
  isEmpty: boolean = true;
  loading: boolean = false;
  structureName!: string;
  private pagesize ={page: 0, size: 5};

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Structures,
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiService: PosteControllerService,    
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.structureName = this.data.name!;
    this.initData();
  }

  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  
  private initData(){
    this.listenToLoading();
    this.apiService.findAllStructure(this.data.idstructure!).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pagePostes=res;
        }
      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
      }
    );
  }

  
  private changePageOrSize(page: number, size: number){
    this.listenToLoading();
    this.apiService.findAllStructure(this.data.idstructure!,page).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pagePostes=res;
        }
      }
    ).catch(
      error => {
      }
    ).finally(
      () => {
      }
    );
  }
  
  changePageAndSize(event: {page: number, size: number}){
    this.changePageOrSize(event.page, event.size);     
  }
 
  openDialogSetPosteUser(postes: Postes) {
    this.openDialogService.openDialog(SetUserToSubposteComponent,postes );
  }

  
  openDialogAddSubPoste(postes: Postes) {
    this.openDialogService.openDialog(AddSubposteComponent,postes);
  }
  
  openDialogSetPosteRole(postes: Postes) {
    this.openDialogService.openDialog(RoleToPosteComponent,postes);
  }

  openDialogEdit(postes: Postes) {
    this.openDialogService.openDialog(UpdatePosteComponent,postes);
  }

  openDialogHistoric(postes: Postes) {
    this.openDialogService.openDialog(ReadPosteComponent,postes);
  }

}
