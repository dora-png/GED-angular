import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { MultipleFilesComponent } from '../../../utils/multiple-files/multiple-files.component';
import { SingleFileComponent } from '../../../utils/single-file/single-file.component';
import { CreateDocComponent } from '../document/create-doc/create-doc.component';
import { ReadDocComponent } from '../document/read-doc/read-doc.component';
import { UpdateDocComponent } from '../document/update-doc/update-doc.component';
import { CreateLiasseComponent } from '../liasse/create-liasse/create-liasse.component';
import { ReadLiasseComponent } from '../liasse/read-liasse/read-liasse.component';
import { UpdateLiasseComponent } from '../liasse/update-liasse/update-liasse.component';

@Component({
  selector: 'app-myfiles',
  templateUrl: './myfiles.component.html',
  styleUrls: ['./myfiles.component.scss']
})
export class MyfilesComponent implements OnInit {
  showFiller: string ="0";
  userLogin: string ="";
  listView: boolean = true;
  constructor(    
    private openDialogService: OpenDialogService,
    private toastr: ToastrService,
  ) { 
    
  }

  setListView(){
    this.listView = !this.listView;
  }

  ngOnInit(): void {
    
  }
  refrech(){}

  onUploadFolder(){
    this.openDialogService.openDialog(MultipleFilesComponent,"")
    .afterClosed()
    .subscribe(result => {
      if(result){
        this.toastr.success("","OK");
        this.refrech();      }
    });
  }

  onUploadFile(liasseName: string=""){
    this.openDialogService.openDialog(SingleFileComponent,liasseName)
    .afterClosed()
    .subscribe(result => {
      if(result){
        this.toastr.success("","OK");
        this.refrech();      }
    });
  }

  createLiasse(liasseName: string=""){
    this.openDialogService.openDialog(CreateLiasseComponent,liasseName,50,50)
    .afterClosed()
    .subscribe(result => {
      if(result){
        this.toastr.success("","OK");
        this.refrech();      }
    });
  }

  
  newDocument(){
    this.openDialogService.openDialog(CreateDocComponent,'repertoire',50,50)
    .afterClosed()
    .subscribe(result => {
      if(result){
        this.toastr.success("","OK");
        this.refrech();      }
    });
  }
  
  recent(){
    this.showFiller = '0';
  }

  myDocument(){ 
    this.showFiller = '1';
  }

  share(){ 
    this.showFiller = '2';
  }

  corbeille(){ 
    this.showFiller = '3';
  }


}
