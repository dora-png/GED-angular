import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { MultipleFilesComponent } from 'src/app/utils/multiple-files/multiple-files.component';
import { SingleFileComponent } from 'src/app/utils/single-file/single-file.component';
import { DeleteDataComponent } from '../../delete-data/delete-data.component';
import { CreateLiasseComponent } from '../../liasse/create-liasse/create-liasse.component';
import { ReadLiasseComponent } from '../../liasse/read-liasse/read-liasse.component';
import { CreateDocComponent } from '../create-doc/create-doc.component';
import { ReadDocComponent } from '../read-doc/read-doc.component';
import { UpdateDocComponent } from '../update-doc/update-doc.component';

@Component({
  selector: 'app-get-doc',
  templateUrl: './get-doc.component.html',
  styleUrls: ['./get-doc.component.scss']
})
export class GetDocComponent implements OnInit {

  showFiller = false;
  userLogin: string ="";
  listView: boolean = true;
  constructor(    
    private openDialogService: OpenDialogService,
    private toastr: ToastrService,
  ) { 
    
  }

  ngOnInit(): void {
    
  }
  refrech(){}

  folderDetail(){
    this.listView = false;
  }
  
  back(){
    this.listView = true;
  }

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

  comment(){

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
    
  onDelete(){
    this.openDialogService.openDialog(DeleteDataComponent,'repertoire',50,50)
    .afterClosed()
    .subscribe(result => {
      if(result){
        this.toastr.success("","OK");
        this.refrech();      }
    });
  }
  

  seeDetail(liasseName: boolean=true){
    this.openDialogService.openDialog(ReadLiasseComponent,liasseName)
    .afterClosed()
    .subscribe(result => {
      if(result){
        this.toastr.success("","OK");
        this.refrech();      }
    });
  }

  share(liasseName: boolean=true){ 
    /*this.openDialogService.openDialog(SingleFileComponent,liasseName)
    .afterClosed()
    .subscribe(result => {
      if(result){
        this.toastr.success("","OK");
        this.refrech();      }
    });*/
  }

  edit(doc: any=true){
    this.openDialogService.openDialog(UpdateDocComponent,1)
    .afterClosed()
    .subscribe(result => {
      if(result){
        this.toastr.success("","OK");
        this.refrech();      }
    });
  }

  view(doc: any=true){
    this.openDialogService.openDialog(ReadDocComponent,1)
    .afterClosed()
    .subscribe(result => {
    });
  }



}
