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
import { DeleteStructureComponent } from '../delete-structure/delete-structure.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-structure',
  templateUrl: './list-structure.component.html',
  styleUrls: ['./list-structure.component.scss']
})
export class ListStructureComponent implements OnInit {

  constantes : any = constante;
  structuresFormGroup!: FormGroup;
  isEmpty: boolean = false;
  loading: boolean = true;
  loadingPage: boolean = false;
  research: boolean = false;
  view: boolean = false;
  valueToSearch: string = "";
  statusStructures: any = [
    {value: 0, name: "Structures desactivé"},
    {value: 1, name: "Structures activé"},
    {value: 2, name: "Toutes les Structures"},
  ];
  pageStructures!: PageStructures;
  searchType: string="";

  constructor(
    private apiService: StructureControllerService,
    private formBuilder: FormBuilder,    
    private route: Router,    
    private auth: AuthenticationService,     
    private toastr: ToastrService
    ) {
      this.structuresFormGroup = this.formBuilder.group(
        {
          statusstructure: new FormControl(2, Validators.required),
        }
      ); 
    }

  ngOnInit(): void {
    this.initData(0,5);
  }
  
  private initData(page: number, size: number){
    this.loading = true;
    this.apiService.findAllStructures(status=this.f["statusstructure"].value, page =page, size = size).subscribe(
      res => {
        if(res==constante.nullValue){
          this.isEmpty=true;
          this.loading = false;
        }else{
          this.isEmpty=constante.falseValue;
          this.pageStructures=res;
          this.loading = constante.falseValue;
        }
      },error => {
        this.isEmpty=true;
        this.loading = false;
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.structuresFormGroup.controls;
  }

  onHasRole(role:string): boolean{
    return this.auth.getRoles(role);
  }

  newStructure() {
    this.route.navigate(['/structure/add-structure']);
  }

  openDialogAddSubStructure(structure: Structures) {
    this.route.navigate(['/structure/add-sub-structure',structure.idstructure!]);
  }

  openDialogView(structure: Structures) {
    this.route.navigate(['/structure/view-structure',structure.idstructure!]);
  }

  private changePageOrSize(page: number, size: number){
    this.pageSwitch(page,size);
  }

  private changePageOrSizeSearchByName(name: string, page: number, size: number){
    this.searchName(name, page, size);
  }

   
  private changePageOrSizeSearchBySigle(sigle: string, page: number, size: number){
    this.searchSigle(sigle, page, size);
  }

  private searchName(name: string, page: number, size: number){    
    this.loadingPage = true;
    this.apiService.searchStructuresByName(status=this.f["statusstructure"].value, name=name, page =page, size = size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
          this.loadingPage = false;
        }else{
          this.isEmpty=false;
          this.pageStructures=response;
          this.loadingPage = false;
        }
      },
      error=>{
        this.loadingPage = false;
      }
    );
  }

  private searchSigle(sigle: string, page: number, size: number){
    this.loadingPage = true;
    this.apiService.searchStructuresBySigle(status=this.f["statusstructure"].value, sigle=sigle, page =page, size = size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
          this.loadingPage = false;
        }else{
          this.isEmpty=false;
          this.pageStructures=response;
          this.loadingPage = false;
        }
      },
      error=>{
        this.loadingPage = false;
      }
    );
  }


  changePageAndSize(event: {page: number, size: number}){
    if(this.valueToSearch.trim().length!<=0){
      this.changePageOrSize(event.page, event.size);
    }else{
      if(this.searchType === "name"){
        this.changePageOrSizeSearchByName(this.valueToSearch!, event.page, event.size);
      }else if(this.searchType==="sigle"){
        this.changePageOrSizeSearchBySigle(this.valueToSearch!, event.page, event.size);
      }
    }    
  }

  searchNameData(){
    if(this.valueToSearch.trim().length!>0){
      this.changePageOrSizeSearchByName(this.valueToSearch!, 0, 5);
    }else{
      this.valueToSearch = "";
      this.pageSwitch(0,5);
    }
  }

  searchSigleData(){
    if(this.valueToSearch.trim().length!>0){
      this.changePageOrSizeSearchBySigle(this.valueToSearch!, 0, 5);
    }else{
      this.valueToSearch = "";
      this.pageSwitch(0,5);
    }
  }

  viewList(){
    this.view=!this.view;
  }

  refresf(){
    this.pageSwitch(0,5);
  }

  private pageSwitch(page: number, size: number){
    this.loadingPage = true;
    this.apiService.findAllStructures(status=this.f["statusstructure"].value, page =page, size = size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
          this.loadingPage = false;
        }else{
          this.isEmpty=false;
          this.pageStructures=response;
          this.loadingPage = false;
        }
      },
      error=>{
        this.loadingPage = false;
      }
    );
  }

  
  updateOnclickGen(e: any) {
    if(this.valueToSearch.length!>0){
      if(this.searchType === "name"){
        this.changePageOrSizeSearchByName(this.valueToSearch!, 0, 5);
      }else if(this.searchType==="sigle"){
        this.changePageOrSizeSearchBySigle(this.valueToSearch!, 0, 5);
      }
    }else{
      this.pageSwitch(0,5);
    }
  }
}
