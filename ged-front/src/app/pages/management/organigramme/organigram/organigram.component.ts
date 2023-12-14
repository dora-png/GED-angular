import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { StructureControllerService } from 'src/app/model';
import { OrganigramStructureComponent } from '../organigram-structure/organigram-structure.component';

@Component({
  selector: 'app-organigram',
  templateUrl: './organigram.component.html',
  styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit {

  
  loading: boolean = false;
  isEmpty: boolean = true;
  directionState: boolean = true;
  nodes: any=[];
  direction: "vertical" | "horizontal" = "horizontal";

  constructor(
    private openDialogService: OpenDialogService,
    private apiService: StructureControllerService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.initData();

  }


  ditection(){
    this.direction = 'vertical';
    /* this.directionState = !this.directionState;
    if(this.directionState){
      this.direction =  "vertical";
    }else{
      this.direction = 'horizontal';
    } */
  }

  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  private initData(){
    this.listenToLoading();
    this.apiService.ogranigramme().toPromise().then(
      res => {
        console.log(res)
        if(res==null){
          this.isEmpty=true;
        }else{
          this.nodes = [];
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
  test(event: any){
    this.openDialogService.openDialog(OrganigramStructureComponent,event);
  }

  refrech(){
    this.initData();
  }

}
