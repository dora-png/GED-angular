import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.scss']
})
export class CreateWorkflowComponent implements OnInit {


  structureSelected = new FormControl();

  structureList: string[] = ['DUAC', 'DBOU', 'Archive', 'RH', 'SG', 'Courrier'];

  
  

  workflows: string [] = ['mon poste'];

  postesList: string [] = ['Poste 1', 'Poste 2', 'Poste 3', 'Poste 4', 'Poste 5','Poste 6', 'Poste 7', 'Poste 8', 'Poste 9', 'Poste 10'];

  
   
  constructor() { }

  ngOnInit(): void {
  }


  onDrop(event: CdkDragDrop<string []>){
    if(event.previousContainer==event.container){
      if(event.container.data == this.postesList ){
        moveItemInArray(
          this.postesList ,
          event.previousIndex,
          event.currentIndex
        );
      }else if(event.container.data == this.workflows){
        moveItemInArray(
          this.workflows,
          event.previousIndex,
          event.currentIndex
        );
      }
    }else{
      if(event.previousContainer.data == this.postesList ){
        transferArrayItem(
          this.postesList,
          this.workflows,
          event.previousIndex,
          event.currentIndex
        );
      }else if(event.previousContainer.data == this.workflows){
        transferArrayItem(
          this.workflows,
          this.postesList,
          event.previousIndex,
          event.currentIndex
        );
      }

    }
  }


}
