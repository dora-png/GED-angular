import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as constante from '../../../../loader/constante';
import { Postes, Structures, Profiles, StructureControllerService } from 'src/app/model';
import { ActivatedRoute, Router } from '@angular/router';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { AddSubstructureComponent } from '../add-substructure/add-substructure.component';
import { CreatePosteComponent } from '../../postes/create-poste/create-poste.component';

@Component({
  selector: 'app-read-structure',
  templateUrl: './read-structure.component.html',
  styleUrls: ['./read-structure.component.scss']
})
export class ReadStructureComponent implements OnInit {  

  constantes: any = constante;
  newStructureFormGroup!: FormGroup;
  editable: boolean = false;   
  edit : boolean = false;  
  editStructure : boolean = false; 
  editSubStructure : boolean = false;  
  editPoste : boolean = false;  
  loading: boolean = false;
  isEmpty: boolean = true;
  structure!: Structures;
  private data!: Structures;
  valid: boolean= false;
  touched: boolean= false;  
  color = "#000000";
  private colorData = "#000000";


  constructor(  
    private route: ActivatedRoute,   
    private router: Router,  
    private apiService: StructureControllerService,
    private openDialogService: OpenDialogService,
    private formBuilder: FormBuilder,  
    private toastr: ToastrService,
    private auth: AuthenticationService
    ) { 
      this.newStructureFormGroup = this.formBuilder.group(
        {
          name: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
          sigle: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
          active: new FormControl(constante.trueValue),
          description: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
        }
      );      
    }

    openDialogAddSubStructure() {
      this.openDialogService.openDialog(AddSubstructureComponent,this.structure).afterClosed()
      .subscribe(result => {
        if(result){
          this.initData(this.structure.idstructure!);
          //this.router.navigate(['/manage/structure']);
        }
      });      
    }

    openDialogAddPostes() {
      this.openDialogService.openDialog(CreatePosteComponent,this.structure).afterClosed()
      .subscribe(result => {
        if(result){
          this.router.navigate(['/manage/structure']);
        }
      });      
    }

    ngOnInit(): void {
      let id: number = this.route.snapshot.params['id'];
      this.editable = this.onHasRole(constante.admin);
      this.initData(id);
    }

    private onHasRole(role:string): boolean{
      return this.auth.getRoles(role);
    }

    onSetSubStructure(): boolean{
      this.editSubStructure = !this.editSubStructure;
      return this.editSubStructure;
    }

    onSetStructure(): boolean{
      if(this.editStructure){
        this.f["name"].setValue(this.data.name!);     
        this.f["sigle"].setValue(this.data.sigle!);  
        this.f["active"].setValue(this.data.active!);
        this.f["description"].setValue(this.data.description!);
        this.colorData = this.data.color!;
        this.color = this.getColor();
      }
      this.editStructure = !this.editStructure;
      return this.editStructure;
    }

    onUpdateStructure(){
      this.structure.name = this.f["name"].value;
      this.structure.sigle = this.f["sigle"].value;
      this.structure.description = this.f["description"].value;
      this.structure.active = this.f["active"].value;
      this.structure.color = this.color;
      console.log(this.structure)
      this.apiService.updateNameStructure(this.structure).subscribe(
        response=>{
          this.toastr.success('','OK');
          this.router.navigate(['manage/structure']);
        },
        error=>{
          this.structure = this.getStructure();
          this.structure.color=this.getColor();

        }
      );
    }

    get f(): { [key: string]: AbstractControl } {
      return this.newStructureFormGroup.controls;
    }

    private initData(id: number){
      this.loading = true;
      this.apiService.findStructuresById(id).subscribe(
        response=>{
          if(response==null){
            this.toastr.info("Structure don't exit","Infos");
            this.router.navigate(["manage/structure"]);
          }else{
            this.isEmpty=false;
            this.data = response;
            this.f["name"].setValue(response.name!);     
            this.f["sigle"].setValue(response.sigle!);  
            this.f["active"].setValue(this.data.active!);
            this.f["description"].setValue(response.description!);
            this.colorData = response.color!;
            this.color = this.getColor();
            this.structure = this.getStructure();            
            this.loading = false;
          }
        },
        error=>{
          this.loading = false;
          this.toastr.info("Verifier votre connexion Internet", "Infos");
        }
      );
    }
  private getColor(): string {
    return this.colorData;
  }
  private getStructure(): Structures {
    return this.data;
  }

  setStatus(){
    this.f["active"].setValue(!this.f["active"].value);
  }

  changeStructure(event: {id: number}){
    this.router.navigate(['/structure/view-structure',event.id]);
  }

  listChange(event: {status: boolean}){
    if(event.status)
      this.initData(this.structure.idstructure!);
  }
  

}
