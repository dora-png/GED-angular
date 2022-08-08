import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
//import { OrganigramSystem, PosteControllerService } from 'src/app/model';

@Component({
  selector: 'app-organigram-structure',
  templateUrl: './organigram-structure.component.html',
  styleUrls: ['./organigram-structure.component.scss']
})
export class OrganigramStructureComponent implements OnInit {
/*
  loading: boolean = false;
  isEmpty: boolean = true;
  nodes: any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef:  MatDialogRef<OrganigramStructureComponent>,
    private apiService: PosteControllerService,
    private loaderService: LoaderService
  ) { }*/
  ngOnInit(): void {
    //this.initData();
    
  }
/*
  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  private initData(){
    this.listenToLoading();
    this.apiService.ogranigramme1(this.data.id).toPromise().then(
      res => {
        if(res==null){
          this.isEmpty=true;
        }else{
          this.isEmpty=false;
          this.nodes.push(res);
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
 
  test(event: any){}
  onCloseModal(){
    this.dialogRef.close();
  }*/
}
