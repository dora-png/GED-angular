import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageStructures, StructureControllerService, Structures } from 'src/app/model';

@Component({
  selector: 'app-profil-structure',
  templateUrl: './profil-structure.component.html',
  styleUrls: ['./profil-structure.component.scss']
})
export class ProfilStructureComponent implements OnInit {

  
  structurePage!: PageStructures;
  structure!:Structures;
  valid: boolean= true;
  clicked: boolean= false;
  isEmpty: boolean = false;
  loading: boolean = true;
  loadingPage: boolean = false;
  research: boolean = false;
  view: boolean = false;
  valueToSearch: string = "";

  constructor(    
    @Inject(MAT_DIALOG_DATA) private data: Structures,
    private apiServiceStructure: StructureControllerService,
    private dialogRef:  MatDialogRef<ProfilStructureComponent>
  ) { }

  ngOnInit(): void {
    this.structure = this.data;
    this.init(0,5); 
  }

  private pageSwitch(page: number, size: number){
    this.loadingPage = true;
    this.apiServiceStructure.findAllStructures(1,page=page,size=size).subscribe(
      response=>{
        console.log(response)
        if(response==null){
          this.isEmpty=true;
          this.loadingPage = false;
        }else{
          this.isEmpty=false;
          this.structurePage = response!;  
          this.loadingPage = false;
        }
      },
      error=>{
        this.loadingPage = false;
      }
    );
  }
  
private changePageOrSize(page: number, size: number){
  this.pageSwitch(page,size);
}

private changePageOrSizeSearchByName(name: string, page: number, size: number){ 
  this.pageSwitchsearchName(name=name, page=page, size=size);
}

changePageAndSize(event: {page: number, size: number}){
  if(this.valueToSearch.trim().length!<=0){
    this.changePageOrSize(event.page, event.size);
  }else{
    this.changePageOrSizeSearchByName(this.valueToSearch!, event.page, event.size);
  }  
}

private searchName(name: string, page: number, size: number){
  this.loadingPage = true;
  this.apiServiceStructure.searchStructuresByName(1,name, page, size).subscribe(
    response=>{
      if(response==null){
        this.isEmpty=true;
        this.loadingPage = false;
      }else{
        this.isEmpty=false;
        this.structurePage = response!;  
        this.loadingPage = false;
      }
    },
    error=>{
      this.loadingPage = false;
    }
  );
}

private pageSwitchsearchName(name: string, page: number, size: number){
  this.loadingPage = true;
  this.apiServiceStructure.searchStructuresByName(1,name, page, size).subscribe(
    response=>{
      if(response==null){
        this.isEmpty=true;
        this.loadingPage = false;
      }else{
        this.isEmpty=false;
        this.structurePage = response!;        
        this.loadingPage = false;
      }
    },
    error=>{
      this.loadingPage = false;
    }

  );
}

search(){
  if(this.valueToSearch.trim().length!>0){
    this.searchName(this.valueToSearch, 0, 5);
  }else{
    this.valueToSearch = "";
    this.init(0,5);
    this.research=false;
  }

}

  private init(page: number, size: number) { 
    this.loading = true;   
    this.apiServiceStructure.findAllStructures(1,page=page,size=size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty = true;  
          this.loading = false;        
        }else{
          this.isEmpty = false;
          this.structurePage = response!; 
          this.loading = false;
        }        
      },
      error=>{ 
        this.loading = false;
      }
    ); 
  }

  private initStructure():Structures{
    return{
        idstructure:0,
        dateCreation: undefined,
        name: undefined,
        sigle: undefined,
        active: undefined,
        color: undefined,
        description: undefined,
        postes: undefined,
        profiles: undefined,
        sousStructure: undefined,
        structureSuperieur: undefined,
    };
  }

  addStructuresToProfile(structure: Structures){
    this.structure = structure;
    this.valid = false;
  }
  containStructure(structure: Structures){
    return structure.name === this.structure!.name;
  }
  removeStructure(structure: Structures){  
    if(this.structure!.idstructure == structure!.idstructure){  
      this.structure = this.initStructure();
      this.valid = true;
    }
  }

  onClose(){
    this.dialogRef.close(this.data);
  }

  onReset(){
    this.structure = this.initStructure();
    this.valid = true;
  }

  save(){
    this.dialogRef.close(this.structure);
  }


}
