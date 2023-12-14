import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { OrganigramSystem, PosteControllerService } from 'src/app/model';

@Component({
  selector: 'app-organigram-structure',
  templateUrl: './organigram-structure.component.html',
  styleUrls: ['./organigram-structure.component.scss']
})
export class OrganigramStructureComponent implements OnInit {

  loading: boolean = false;
  isEmpty: boolean = true;
  nodes: any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef:  MatDialogRef<OrganigramStructureComponent>,
    private apiService: PosteControllerService,
    private loaderService: LoaderService
  ) { }
  ngOnInit(): void {
    this.initData();
    
  }

  refrech(){
    this.initData();
  }

  private initData(){
    this.apiService.ogranigramme1(this.data.id).toPromise().then(
      res => {
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
 
  test(event: any){}
  onCloseModal(){
    this.dialogRef.close();
  }
}
