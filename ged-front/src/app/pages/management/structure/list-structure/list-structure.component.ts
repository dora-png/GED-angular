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
import { CreatePosteComponent } from '../../postes/create-poste/create-poste.component';
import { ListPosteComponent } from '../../postes/list-poste/list-poste.component';

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
  private valueToSearch!: string;
  searchBy: 'name' | 'sigle' | undefined;
  private pagesize ={page: 0, size: 5};

  constructor(
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiService: StructureControllerService,    
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
    this.apiService.findAll4().toPromise().then(
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

  newStructure() {
    this.openDialogService.openDialog(CreateStructureComponent);
  }

  openDialogAddSubStructure(strucure: Structures) {
    this.openDialogService.openDialog(AddSubstructureComponent, strucure);
  }
  openDialogEdit(strucure: Structures) {
    this.openDialogService.openDialog(UpdateStructureComponent, strucure);
  }

  openDialogHistoric(strucure: Structures) {
    this.openDialogService.openDialog(ReadStructureComponent, strucure);
  }

  openDialogCreatePoste(strucure: Structures) {
    this.openDialogService.openDialog(CreatePosteComponent, strucure);
  }

  openDialogListPoste(strucure: Structures) {
    this.openDialogService.openDialog(ListPosteComponent, strucure);
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


}
