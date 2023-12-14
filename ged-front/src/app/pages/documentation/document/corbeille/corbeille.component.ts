import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss']
})
export class CorbeilleComponent implements OnInit {

  showFiller = false;
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


  restaure(doc: any=true){
  /*   this.openDialogService.openDialog(UpdateDocComponent,1)
    .afterClosed()
    .subscribe(result => {
      if(result){
        this.toastr.success("","OK");
        this.refrech();      }
    }); */
  }

  delete(doc: any=true){
   /*  this.openDialogService.openDialog(ReadDocComponent,1)
    .afterClosed()
    .subscribe(result => {
    }); */
  }

}
