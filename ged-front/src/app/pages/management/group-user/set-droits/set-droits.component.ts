import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Droits, DroitsControllerService, GroupUser, GroupUserControllerService, PageDroits } from 'src/app/model';

@Component({
  selector: 'app-set-droits',
  templateUrl: './set-droits.component.html',
  styleUrls: ['./set-droits.component.scss']
})
export class SetDroitsComponent implements OnInit {

  droitPage!: PageDroits;  
  currentDroitPage!: PageDroits;  
  isdroitPageEmpty: boolean = false;
  valid: boolean= true;
  clicked: boolean= false;
  isEmpty: boolean = false;
  isPageCurrentDroitEmpty: boolean = true;
  isPageDroitEmpty: boolean = true;
  loading: boolean = true;
  loadingCurrentDroit: boolean = true;
  loadingDroitToAdd: boolean = true;
  valueToSearch: string = "";
  valueToSearchCurrentDroit: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private apiServiceGroup: GroupUserControllerService,
    private toastr: ToastrService,
    private dialogRef:  MatDialogRef<SetDroitsComponent>
  ) { }

  ngOnInit(): void {
    this.init(); 
  }

  private initCurrentDroit(page: number, size: number){
    this.loadingCurrentDroit = true;
    this.apiServiceGroup.findAllDroitInGroupUser(this.data,page,1,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageCurrentDroitEmpty = false;
          this.currentDroitPage = resp;
          this.loadingCurrentDroit = false;
        }else{
          this.isPageCurrentDroitEmpty = true;
          this.loadingCurrentDroit = false;          
        }
      },error=>{
        this.isPageCurrentDroitEmpty = true;
        this.loadingCurrentDroit = false;
      }
    );
  }
  
  private initDroitsToAdd(page: number, size: number) {
    this.loadingDroitToAdd = true;
    this.apiServiceGroup.findAllDroitToAddInGroupUser(this.data,page,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageDroitEmpty = false;
          this.droitPage = resp;
          this.loadingDroitToAdd = false;
        }else{
          this.isPageDroitEmpty = true;
          this.loadingDroitToAdd = false;          
        }
      },error=>{
        this.isPageDroitEmpty = true;
        this.loadingDroitToAdd = false;
      }
    );
  }

  private getCurentDroits(page: number, size: number) { 
    this.loadingCurrentDroit = true;
    this.apiServiceGroup.findAllDroitInGroupUser(this.data,page,1,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageCurrentDroitEmpty = false;
          this.currentDroitPage = resp;
          this.loadingCurrentDroit = false;
        }else{
          this.isPageCurrentDroitEmpty = true;
          this.loadingCurrentDroit = false;          
        }
      },error=>{
        this.isPageCurrentDroitEmpty = true;
        this.loadingCurrentDroit = false;
      }
    );
  }
  
  private getDroitToAdd(page: number, size: number) {
    this.loadingDroitToAdd = true;
    this.apiServiceGroup.findAllDroitToAddInGroupUser(this.data,page,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageDroitEmpty = false;
          this.droitPage = resp;
          this.loadingDroitToAdd = false;
        }else{
          this.isPageDroitEmpty = true;
          this.loadingDroitToAdd = false;
        }
      },error=>{
        this.isPageDroitEmpty = true;
        this.loadingDroitToAdd = false;
      }
    );
  }

  private searchCurrentDroitByDescription(name: string, page: number, size: number, status: number){
    this.loadingCurrentDroit = true;
    this.apiServiceGroup.findAllDroitInGroupUserByName(this.data,name,page,1,size).subscribe(
      resp=>{
        if(resp != null){
          this.isPageCurrentDroitEmpty = false;
          this.currentDroitPage = resp;
          this.loadingCurrentDroit = false;
        }else{
          this.isPageCurrentDroitEmpty = true;
          this.loadingCurrentDroit = false;
        }
      },error=>{
        this.isPageCurrentDroitEmpty = true;
        this.loadingCurrentDroit = false;
      }
    );
  }

  private searchDroitByDescription(name: string, page: number, size: number){    
    this.loadingDroitToAdd = true;
    this.apiServiceGroup.findAllDroitToAddInGroupUserByName(this.data,name,page,size).subscribe(
      resp=>{
        if(resp  != null){
          this.isPageDroitEmpty = false;
          this.droitPage = resp;
          this.loadingDroitToAdd = false;
        }else{
          this.isPageDroitEmpty = true;
          this.loadingDroitToAdd = false;
        }
      },error=>{
        this.isPageDroitEmpty = true;
        this.loadingDroitToAdd = false;
      }
    );
  }

  private pageSwitchCurrentDroits(page: number, size: number){
    if(this.valueToSearchCurrentDroit.trim() == ""){
      this.getCurentDroits(page,size);
    }else{
      this.searchCurrentDroitByDescription(this.valueToSearchCurrentDroit.trim(), page, size, 1);

    }
  }

  private pageSwitchDroitsToAdd(page: number, size: number){
    if(this.valueToSearch.trim() == ""){
      this.getDroitToAdd(page,size);
    }else{
      this.searchDroitByDescription(this.valueToSearch.trim(), page, size);

    }
  }

  private init() {
    this.loading = true;
    this.apiServiceGroup.findGroupUserById(this.data).subscribe(
      response=>{
        if(response==null){
          this.toastr.info("GroupUser don't exit","Infos");
          this.dialogRef.close();
        }else{
          this.isEmpty=false;  
          this.loading = false;
          this.initCurrentDroit(0,5);
          this.initDroitsToAdd(0,5);
        }
      },
      error=>{
        this.loading = false;
        this.toastr.info(error.error.message, "Infos");
        this.dialogRef.close();
      }
    );
  }  

  onExit(){
    this.dialogRef.close();
  }

  searchCurrentDroit(){
    this.pageSwitchCurrentDroits(0,5);
  }

  search(){
    this.pageSwitchDroitsToAdd(0,5);
  }
  
  changePageAndSize(event: {page: number, size: number}){
    this.pageSwitchDroitsToAdd(event.page, event.size);
  }
  
  changePageAndSizeCurrentDroit(event: {page: number, size: number}){    
    this.pageSwitchCurrentDroits(event.page, event.size);
  }
  
  
  addDroit(droit: Droits){
    this.loading = true;
    this.apiServiceGroup.addDroitToGroupUser(this.data, droit.iddroit!).subscribe(
      response=>{
          this.toastr.success("Droit "+droit.description! +" Ajouter", "OK");
          this.init();
      },
      error=>{
        this.loading = false;
        this.toastr.error("Verifier votre connexion", "KO");
      }
    )      
  }
    
    removeDroit(droit: Droits){  
      this.loading = true;
    this.apiServiceGroup.removeDroitToGroupUser(this.data, droit.iddroit!).subscribe(
      response=>{
          this.toastr.success("Droit "+droit.description! +" Retirer", "OK");
          this.init();
      },
      error=>{
        this.loading = false;
        this.toastr.error("Verifier votre connexion", "KO");
      }
    )  
    }



}
