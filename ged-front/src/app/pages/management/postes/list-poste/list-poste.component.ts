import { Component, Inject, Input, OnInit } from '@angular/core';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { CreatePosteComponent } from '../create-poste/create-poste.component';
import { SetUserToSubposteComponent } from '../set-user-to-subposte/set-user-to-subposte.component';
import { UpdatePosteComponent } from '../update-poste/update-poste.component';
import { ReadPosteComponent } from '../read-poste/read-poste.component';
import { AddSubposteComponent } from '../add-subposte/add-subposte.component';
import { RoleToPosteComponent } from '../role-to-poste/role-to-poste.component';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { PosteControllerService } from 'src/app/model/api/posteController.service';
import { PagePostes } from 'src/app/model/model/pagePostes';
import { Postes, Structures } from 'src/app/model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/loader/authentication.service';

@Component({
  selector: 'app-list-poste',
  templateUrl: './list-poste.component.html',
  styleUrls: ['./list-poste.component.scss']
})
export class ListPosteComponent implements OnInit {

  @Input() structure!: Structures;
  postesFormGroup!: FormGroup;
  isEmpty: boolean = false;
  loading: boolean = true;
  loadingPage: boolean = false;
  research: boolean = false;
  view: boolean = false;
  valueToSearch: string = "";
  statusPostes: any = [
    {value: 0, name: "Postes desactivé"},
    {value: 1, name: "Postes activé"},
    {value: 2, name: "Toutes les Postes"},
  ];
  pagePostes!: PagePostes;
  private pagesize ={page: 0, size: 5};

  constructor(
    
    private formBuilder: FormBuilder,    
    private route: Router,    
    private auth: AuthenticationService,   
    private openDialogService: OpenDialogService,
    private apiService: PosteControllerService,    
    private toastr: ToastrService
    ) { 
      this.postesFormGroup = this.formBuilder.group(
        {
          statusposte: new FormControl(2, Validators.required),
        }
      ); 
    }

  ngOnInit(): void {
    this.initData();
  }

 
  openDialogCreatePoste() {
    this.openDialogService.openDialog(CreatePosteComponent, this.structure)
        .afterClosed()
        .subscribe(result => {
          if(result)
            this.refresf();
        });
  }
  
  private initData(){
    this.loading = true;
    this.apiService.findAllStructurePoste(this.structure.idstructure!).subscribe(
      res => {
        if(res==null){
          this.isEmpty=true;
          this.loading = false;
        }else{
          this.isEmpty=false;
          this.pagePostes=res;
          this.loading = false;
        }
      },
      error=>{
        this.loading = false;

      }
    );
  }

 
  openDialogSetPosteUser(postes: Postes) {
    this.openDialogService.openDialog(SetUserToSubposteComponent,postes )
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }

  
  openDialogAddSubPoste(postes: Postes) {
    this.openDialogService.openDialog(AddSubposteComponent,postes)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }
  
  openDialogEdit(postes: Postes) {
    this.openDialogService.openDialog(UpdatePosteComponent,postes)
        .afterClosed()
        .subscribe(result => {
          if(result){
            this.refresf();
          }
        });
  }

  openDialogHistoric(postes: Postes) {
    this.openDialogService.openDialog(ReadPosteComponent,postes);
  }






get f(): { [key: string]: AbstractControl } {
  return this.postesFormGroup.controls;
}

onHasRole(role:string): boolean{
  return this.auth.getRoles(role);
}

newPoste() {
  //this.route.navigate(['/structure/add-structure']);
}



openDialogAddSubPostes(poste: Postes) {
  //this.route.navigate(['/structure/add-sub-structure',structure.idstructure!]);
}

openDialogView(poste: Postes) {
  //this.route.navigate(['/structure/view-structure',structure.idstructure!]);
}

private changePageOrSize(page: number, size: number){
  this.pageSwitch(page,size);
}

private changePageOrSizeSearchByName(name: string, page: number, size: number){
  this.searchName(name, page, size);
}

private searchName(name: string, page: number, size: number){    
  this.loadingPage = true;
  /*this.apiService.searchStructuresByName(status=this.f["statusstructure"].value, name=name, page =page, size = size).subscribe(
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
  );*/
}

changePageAndSize(event: {page: number, size: number}){
  this.valueToSearch="";
  if(this.valueToSearch.trim().length!<=0){
    this.changePageOrSize(event.page, event.size);
  }else{
    this.changePageOrSizeSearchByName(this.valueToSearch!, event.page, event.size);
  }    
}

search(){
  if(this.valueToSearch.trim().length!>0){
    this.changePageOrSizeSearchByName(this.valueToSearch!, 0, 5);
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
  this.apiService.findAllStructurePoste(this.structure.idstructure!, page =page, size = size).subscribe(
    response=>{
      if(response==null){
        this.isEmpty=true;
        this.loadingPage = false;
      }else{
        this.isEmpty=false;
        this.pagePostes=response;
        this.loadingPage = false;
      }
    },
    error=>{
      this.loadingPage = false;
      this.toastr.error("Check your Internet Connexion", "Error")
    }
  );
}


updateOnclickGen(e: any) {
  if(this.valueToSearch.length!>0){
    this.changePageOrSizeSearchByName(this.valueToSearch!, 0, 5);
  }else{
    this.pageSwitch(0,5);
  }
}


}
