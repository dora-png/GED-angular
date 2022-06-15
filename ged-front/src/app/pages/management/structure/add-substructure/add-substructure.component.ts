import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { PageStructures, StructureControllerService, Structures } from 'src/app/model';
@Component({
  selector: 'app-add-substructure',
  templateUrl: './add-substructure.component.html',
  styleUrls: ['./add-substructure.component.scss']
})
export class AddSubstructureComponent implements OnInit {


  structurePage?: PageStructures;
  structureListe?: Array<Structures>;
  StructureSigle: string|undefined;
  isEmpty: boolean = true;
  nameStructure: string = "";
  loading: boolean = false;
  research: boolean = false;
  private valueToSearch!: string;
  searchBy: 'name' | 'sigle' | undefined;

  
   
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Structures,
    private dialogRef:  MatDialogRef<AddSubstructureComponent>,    
    private openDialogService: OpenDialogService,
    private apiServiceStructure: StructureControllerService,     
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.StructureSigle = this.data.sigle;
    this.initWorkFlowPoste();
  }
  onRemoveSousStructure(structure: Structures){
    let structures: Structures={
      idstructure: this.data.idstructure,
      name: this.data.name,
      sigle: this.data.sigle,
      description: this.data.description,
      postes: this.data.postes,
      sousStructure: [structure],
      structureSuperieur: this.data.structureSuperieur,
    };
   this.onRemoveData(structures,"Maire");
  }

  private initStructureList(){
    this.apiServiceStructure.structureUnUseListe().toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.structurePage=res;
          this.structureListe = this.structurePage!.content!;
          this.structureListe.splice(this.structureListe.findIndex(poste => poste.idstructure! === this.data.idstructure!),1);
          if(this.structureListe.length<=0){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
          }
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

  private initWorkFlowPoste(){
    this.initStructureList();
  }

   private onRemoveData(structure: Structures,posteName: string){
   this.apiServiceStructure.removeSubStructures(structure,posteName).toPromise().then(
      res => {
        this.toastr.success('Update', "Ok");
        this.data.sousStructure!.splice(this.data.sousStructure!.findIndex(poste => poste.idstructure! === structure.idstructure),1);
      }
    ).catch(
      error => {
        this.toastr.error('Update', "KO");
      }
    ).finally(
      () => {
      }
    );

  }



  onDrop(event: CdkDragDrop<Structures []>){
    if(event.previousContainer==event.container){

    }else{
      if(event.previousContainer.data == this.structureListe ){
        transferArrayItem(
          this.structureListe,
          this.data.sousStructure!,
          event.previousIndex,
          event.currentIndex
        );
        let structures: Structures={
          idstructure: this.data.idstructure,
          name: this.data.name,
          sigle: this.data.sigle,
          description: this.data.description,
          postes: this.data.postes,
          sousStructure: [this.structureListe[event.previousIndex]],
          structureSuperieur: this.data.structureSuperieur,
        };
        this.onDragPosteAction(structures,"Maire",event.currentIndex);   
      }

    }
  }

  private onDragPosteAction(structures: Structures,posteName: string,index:number){
    this.apiServiceStructure.addSubStructures(structures,posteName).toPromise().then(
      res => {
        this.toastr.success('Update', "Ok");
      }
    ).catch(
      error => {
        this.toastr.error('Update', "KO");
        this.structureListe?.push(
          this.data.sousStructure![index]
        );
        this.data.sousStructure!.splice(this.data.sousStructure!.findIndex(structure => structure.idstructure === this.data.sousStructure![index].idstructure),1);
      }
    ).finally(
      () => {
      }
    );

  }

  private onNextPage(page: number){
    this.apiServiceStructure.structureUnUseListe(page).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.structurePage=res;
          this.structureListe = this.structurePage!.content!;
          this.structureListe.splice(this.structureListe.findIndex(poste => poste.idstructure! === this.data.idstructure!),1);
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

  onNext(){
    if(this.searchBy==null){
      this.onNextPage(this.structurePage?.pageable?.pageNumber!+1);
    }else{
      if(this.valueToSearch.length!>0){
        if(this.searchBy =="name"){
          this.searchNamePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!+1);
        }else if(this.searchBy =="sigle"){        
          this.searchSiglePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!+1);
        }else{
          this.toastr.error("err.error.message", "Error +err.status");
        }
      }
    }

  }

  onPreview(){
    if(this.searchBy==null){
      this.onNextPage(this.structurePage?.pageable?.pageNumber!-1);
    }else{
      if(this.valueToSearch.length!>0){
        if(this.searchBy =="name"){
          this.searchNamePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!-1);
        }else if(this.searchBy =="sigle"){        
          this.searchSiglePage(this.valueToSearch!, this.structurePage?.pageable?.pageNumber!-1);
        }else{
          this.toastr.error("err.error.message", "Error +err.status");
        }
      }
    }
  }

  private searchName(name: string){
    this.apiServiceStructure.searchByName4(name).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initStructureList();
        }else{
          this.research=false;
          this.structurePage=res; 
          this.structureListe = this.structurePage!.content!;
          this.structureListe.splice(this.structureListe.findIndex(poste => poste.idstructure! === this.data.idstructure!),1);     
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
    this.apiServiceStructure.searchBySigle3(name).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initStructureList();
        }else{
          this.research=false;
          this.structurePage=res;
          this.structureListe = this.structurePage!.content!; 
          this.structureListe.splice(this.structureListe.findIndex(poste => poste.idstructure! === this.data.idstructure!),1);     
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

  private searchNamePage(name: string, page: number){
    this.apiServiceStructure.searchByName4(name, page).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initStructureList();
        }else{
          this.research=false;
          this.structurePage=res; 
          this.structureListe = this.structurePage!.content!;   
          this.structureListe.splice(this.structureListe.findIndex(poste => poste.idstructure! === this.data.idstructure!),1);  
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

  private searchSiglePage(sigle: string, page: number){
    this.apiServiceStructure.searchBySigle3(sigle, page).toPromise().then(
      res => {
        if(res==null){
          this.research=true;
          this.initStructureList();
        }else{
          this.research=false;
          this.structurePage=res;  
          this.structureListe = this.structurePage!.content!; 
          this.structureListe.splice(this.structureListe.findIndex(poste => poste.idstructure! === this.data.idstructure!),1); 
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
      this.initStructureList();
      this.research=false;
      this.searchBy = undefined;
    }
  }

}
