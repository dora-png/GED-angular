import { Component, OnInit } from '@angular/core';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { CreateStructureComponent } from '../create-structure/create-structure.component';
import { UpdateStructureComponent } from '../update-structure/update-structure.component';
import { AddSubstructureComponent } from '../add-substructure/add-substructure.component';
import { ReadStructureComponent } from '../read-structure/read-structure.component';
import { LoaderService } from 'src/app/loader/loader.service';
//import { PageStructures, StructureControllerService, Structures } from 'src/app/model';
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

/*
  pageStructures!: PageStructures;
  isEmpty: boolean = constante.trueValue;
  loading: boolean = constante.trueValue;
  loadingOther: boolean = constante.falseValue;
  view: boolean = constante.falseValue;
  constantes: any = constante;
  valueToSearch!: string;
  searchBy: 'name' | 'sigle' | undefined;

  constructor(
    private loaderService: LoaderService,
    private openDialogService: OpenDialogService,
    private apiService: StructureControllerService,
    private auth: AuthenticationService,    
    private toastr: ToastrService
    ) { }
*/
  ngOnInit(): void {
    //this.initData(this.constantes.pageInit,this.constantes.sizeInit,this.constantes.trueValue);
  }
/*
  onHasRole(role:string): boolean{
    return this.auth.getRoles(role);
  }

  private listenToLoading(init: boolean): void {
    if(init){      
      this.loaderService.getSub
      .pipe(delay(this.constantes.pageInit)) 
      .subscribe((loading) => {
        this.loading = loading;
      });
    }else{
      this.loaderService.getSub
      .pipe(delay(this.constantes.pageInit)) 
      .subscribe((loading) => {
        this.loadingOther = loading;
      });
    }
    
  }



  
  private initData(page: number, size: number, init: boolean){
    this.listenToLoading(init);
    this.apiService.findAll4(page,size).subscribe(
      res => {
        if(res==constante.nullValue){
          this.isEmpty=constante.trueValue;
        }else{
          this.isEmpty=constante.falseValue;
          this.pageStructures=res;
        }
      },error => {
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
        }else{
          this.toastr.error(constante.tokenDefaultValue,constante.error);
        }
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
    this.initData(page,size,this.constantes.falseValue);
  }

  private changePageOrSizeSearchByName(name: string, page: number, size: number){
    this.searchName(name, page, size);
  }
  
  private changePageOrSizeSearchBySigle(sigle: string, page: number, size: number){
    this.searchSigle(sigle, page, size);
  }

  changePageAndSize(event: {page: number, size: number}){
    if(this.searchBy==constante.nullValue){
      this.changePageOrSize(event.page, event.size);
    }else{
      if(this.searchBy ==this.constantes.nameSearchValue){
        this.changePageOrSizeSearchByName(this.valueToSearch!, event.page, event.size);
      }else if(this.searchBy ==this.constantes.sigleSearchValue){       
        this.changePageOrSizeSearchBySigle(this.valueToSearch!, event.page, event.size);
      }else{
        this.toastr.error(constante.tokenDefaultValue, this.constantes.error);
      }
    }    
  }
 
  private searchName(name: string, page: number, size: number){
    this.listenToLoading(this.constantes.falseValue);
    this.apiService.searchByName4(name,page,size).subscribe(
      res => {
        if(res==constante.nullValue){
          this.pageStructures = res;
        }else{
          this.pageStructures=res;
        }
      },error => {
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
        }else{
          this.toastr.error(constante.tokenDefaultValue,constante.error);
        }
      }
    );
    
  }

  private searchSigle(sigle: string, page: number, size: number){
    this.listenToLoading(this.constantes.falseValue);
    this.apiService.searchBySigle3(sigle,page,size).subscribe(
      res => {
        if(res==constante.nullValue){
          this.pageStructures=res;
        }else{
          this.pageStructures=res;
        }
      },error => {
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
        }else{
          this.toastr.error(constante.tokenDefaultValue,constante.error);
        }
      }
    );
  }

  search(){
    if(this.valueToSearch.trim().length!>this.constantes.pageInit){
      if(this.searchBy ==this.constantes.nameSearchValue){
        this.searchName(this.valueToSearch,this.constantes.pageInit,this.constantes.sizeInit);
      }else if(this.searchBy ==this.constantes.sigleSearchValue){        
        this.searchSigle(this.valueToSearch,this.constantes.pageInit,this.constantes.sizeInit);
      }else{
        this.toastr.error("select paramater to search", this.constantes.error);
      } 
    }
  }

  modelChanged(event: any){
    if(event.trim().length!<=this.constantes.pageInit){
      this.searchBy = undefined;
      this.refresf();
    }
  }

  viewList(){
    this.view=!this.view;
  }

  refresf(){
    this.initData(this.constantes.pageInit,this.constantes.sizeInit,this.constantes.trueValue);
  }
*/

}
