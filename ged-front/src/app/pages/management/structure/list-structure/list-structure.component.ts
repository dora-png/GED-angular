import { Component, OnInit } from '@angular/core';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { CreateStructureComponent } from '../create-structure/create-structure.component';
import { UpdateStructureComponent } from '../update-structure/update-structure.component';
import { AddSubstructureComponent } from '../add-substructure/add-substructure.component';
import { ReadStructureComponent } from '../read-structure/read-structure.component';
import { LoaderService } from 'src/app/loader/loader.service';
import { PageStructures, StructureControllerService, Structures } from 'src/app/model';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { ListPosteComponent } from '../../postes/list-poste/list-poste.component';
import * as constante from '../../../../loader/constante';
import { HttpStatusCode } from '../../../../loader/status-code';
import { AuthenticationService } from 'src/app/loader/authentication.service';

@Component({
  selector: 'app-list-structure',
  templateUrl: './list-structure.component.html',
  styleUrls: ['./list-structure.component.scss']
})
export class ListStructureComponent implements OnInit {


  pageStructures!: PageStructures;
  isEmpty: boolean = true;
  loading: boolean = false;
  research: boolean = false;
  view: boolean = false;
  private valueToSearch!: string;
  searchBy: 'name' | 'sigle' | undefined;
  private pagesize ={page: 0, size: 5};

  constructor(
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiService: StructureControllerService,
    private auth: AuthenticationService,    
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
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
    this.apiService.findAll4().subscribe(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageStructures=res;
        }
      },error => {
        if(error.status === HttpStatusCode.Unauthorized){
          this.isEmpty=true;
          this.toastr.warning(error.error,constante.warning);
          this.auth.onLogOut5S();
        }else{

        }
        console.log(error)
      }
    );
  }

  newStructure() {
    this.openDialogService.openDialog(CreateStructureComponent)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }

  openDialogAddSubStructure(strucure: Structures) {
    this.openDialogService.openDialog(AddSubstructureComponent, strucure)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }
  openDialogEdit(strucure: Structures) {
    this.openDialogService.openDialog(UpdateStructureComponent, strucure)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }

  openDialogHistoric(strucure: Structures) {
    this.openDialogService.openDialog(ReadStructureComponent, strucure);
  }



  openDialogListPoste(strucure: Structures) {
    this.openDialogService.openDialog(ListPosteComponent, strucure)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }

  private changePageOrSize(page: number, size: number){
    this.listenToLoading();
    this.apiService.findAll4(page, size).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageStructures=res;
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

  private changePageOrSizeSearchByName(name: string, page: number, size: number){
    this.listenToLoading();
    this.apiService.searchByName4(name, page, size).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageStructures=res;
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
  
  private changePageOrSizeSearchBySigle(sigle: string, page: number, size: number){
    this.listenToLoading();
    this.apiService.searchBySigle3(sigle, page, size).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.pageStructures=res;
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
    if(this.searchBy==null){
      this.changePageOrSize(event.page, event.size);
    }else{
      if(this.searchBy =="name"){
        this.changePageOrSizeSearchByName(this.valueToSearch!, event.page, event.size);
      }else if(this.searchBy =="sigle"){       
        this.changePageOrSizeSearchBySigle(this.valueToSearch!, event.page, event.size);
      }else{
        this.toastr.error("err.error.message", "Error +err.status");
      }

    }    
  }
 
  private searchName(name: string){
    this.listenToLoading();
    this.apiService.searchByName4(name).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initData();
        }else{
          this.research=false;
          this.pageStructures=res;
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

  private searchSigle(name: string){
    this.listenToLoading();
    this.apiService.searchBySigle3(name).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initData();
        }else{
          this.research=false;
          this.pageStructures=res;
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

  search(event: any){
    let searchValue: string =event.target.value;
    searchValue = searchValue.trim();
    if(searchValue.length!>0){
      this.valueToSearch=searchValue;
      if(this.searchBy =="name"){
        this.searchName(this.valueToSearch);
      }else if(this.searchBy =="sigle"){        
        this.searchSigle(this.valueToSearch);
      }else{
        this.toastr.error("err.error.message", "Error +err.status");
      } 
    }else{
      this.initData();
      this.research=false;
      this.searchBy = undefined;
    }
  }

  viewList(){
    this.view=!this.view;

  }

  refresf(){
    this.initData();
  }


}
