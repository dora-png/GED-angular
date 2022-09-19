import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { Structures } from 'src/app/model';
import { AddSubstructureComponent } from '../add-substructure/add-substructure.component';

@Component({
  selector: 'app-list-sub-structure',
  templateUrl: './list-sub-structure.component.html',
  styleUrls: ['./list-sub-structure.component.scss']
})
export class ListSubStructureComponent implements OnInit {

  @Input() structure! : Structures;
  @Input() edit! : boolean;
  @Output() changeStructure = new EventEmitter<{id: number}>();
  @Output() editListStructures = new EventEmitter<{list: Structures[]}>();
  @Output() status = new EventEmitter<{status: boolean}>();
  listSubStructure! : Structures[];
  constructor(  
    private openDialogService: OpenDialogService,
    private router: Router
    ) {
      
     }

    openDialogAddSubStructure() {
       this.openDialogService.openDialog(AddSubstructureComponent,this.structure).afterClosed()
       .subscribe(result => {
         if(result){
           this.status.emit({status: true});
         }else{
          this.status.emit({status: false});
         }
       });      
     }

  ngOnInit(): void {
    this.listSubStructure = this.structure.sousStructure!;
  }

  onSee(structure: Structures){
    this.changeStructure.emit({id: structure.idstructure!});
  }

}
