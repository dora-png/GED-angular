import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { DroitsControllerService, PageDroits, Droits, UsersControllerService } from '../../../../model'
@Component({
  selector: 'app-add-remove-droit',
  templateUrl: './add-remove-droit.component.html',
  styleUrls: ['./add-remove-droit.component.scss']
})
export class AddRemoveDroitComponent implements OnInit {

  isEmpty: boolean = true;
  droitToAdd: Droits[]=[];
  loading: boolean = true;
  clicked: boolean = false;
  pageDroits!: PageDroits;


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private loaderService: LoaderService,
    private apiService: DroitsControllerService,
    private dialogRef:  MatDialogRef<AddRemoveDroitComponent>, 
    private apiServiceProfile: UsersControllerService
  ) { }

  ngOnInit(): void {
   // this.listenToLoading();
   // this.init(0,5);
  }
/*
  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  addDroit(droit: Droits){
    this.droitToAdd.push(droit);
  }
  containDroit(droit: Droits){
    let containElement: boolean= false
    this.droitToAdd.find(
      droits=>{
        if(droit.iddroit===droits.iddroit){
          containElement = true;
        }
      }
    );
    return containElement;
  }

  removeDroit(droit: Droits){    
    this.droitToAdd = this.droitToAdd.filter(function (droits) {
        return droits.abbr != droit.abbr;
      }
    );
  }
  private listDroit(page: number, size:number){
    this.apiService.findAllDroit(page, size).subscribe(
      resp=>{
        this.pageDroits = resp;
      },
      error=>{

      }
    );
  }

  private init(page: number, size: number) {
    this.apiService.findAllDroitUser(this.data, page, size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty = true;
          this.listDroit(0,5);
          
        }else{
          this.isEmpty = false;
          let listIds : Array<number> = [];
          this.droitBeans = response;
          this.droitBeans.forEach(droitsBean =>{
            let id: number = droitsBean.iddroit!;
            listIds.push(id.valueOf());
          })
          this.apiService.findListDroitToAdd(listIds).subscribe(
            resp=>{
              this.pageDroits = resp;
            },
            error=>{
  
            }
          );
        }
        
      },
      error=>{

      }
    );
  }


  saveProfileDroit(){
    this.clicked=!this.clicked;
    if(this.droitToAdd.length > 0){
      let profilesDroitBeanList: ProfilesDroitBean[]=[];
      let profilesDroitBean: ProfilesDroitBean = {
        droit: undefined,
        profile: this.data
      };
      for(let index in this.droitToAdd){
        profilesDroitBean.droit = this.droitToAdd[index].idDroit;
        profilesDroitBeanList.push(profilesDroitBean);
      }
      this.droitToAdd = [];
      this.apiServiceProfile.addDroitsToUsers(profilesDroitBeanList).subscribe(
        response=>{
          this.closeModal(false);          
        },
        error=>{
          this.clicked=!this.clicked;
        }
      );

    }
  }

  changePageAndSize(event: any){
    this.init(event.page,5);
  }

  onRemove(droitBean: DroitsBean){    
    this.clicked=!this.clicked;
    let profilesDroitBean: ProfilesDroitBean = {
      droit: droitBean.iddroit,
      profile: this.data
    };
    this.apiServiceProfile.removeDroitsToUsers(profilesDroitBean).subscribe(
      response=>{
        this.droitBeans = this.droitBeans.filter(function (droits) {
          return droits.iddroit != droitBean.iddroit && droits.typeDroit != droitBean.typeDroit;
        }
      );
        this.clicked=!this.clicked;
      },
      error=>{
        this.clicked=!this.clicked;
      }
    )
  }

  onClose(){
    this.closeModal(false);
  }

  private closeModal(value: boolean){
    this.dialogRef.close(value);
  }
*/
}
