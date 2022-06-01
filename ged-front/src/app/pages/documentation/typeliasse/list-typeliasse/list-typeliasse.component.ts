import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { SearchLiasseComponent } from '../../liasse/search-liasse/search-liasse.component';
import { CreateTypeliasseComponent } from '../create-typeliasse/create-typeliasse.component';
import { ReadTypeliasseComponent } from '../read-typeliasse/read-typeliasse.component';
import { UpdateTypeliasseComponent } from '../update-typeliasse/update-typeliasse.component';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
 interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Projet',
    children: [
      {
        name: 'Liasse 1',
        children: [
          {name: 'doc 4'}, 
          {name: 'doc 8'}, 
          {name: 'doc 9'}
        ],      
      }, 
      {
        name: 'Liasse 2',
        children: [
          {name: 'doc 4'},
          {name: 'doc 8'}, 
          {name: 'doc 9'}
        ],      
      }, 
      {
        name: 'Liasse 2',
        children: [
          {name: 'doc 4'},
          {name: 'doc 8'},
          {name: 'doc 9'}
        ],      
      }
    ],
  },
  {
    name: 'Externe',
    children: [
      {
        name: 'Liasse 1',
        children: [
          {name: 'doc 4'}, 
          {name: 'doc 8'}, 
          {name: 'doc 9'}
        ],      
      }, 
      {
        name: 'Liasse 2',
        children: [
          {name: 'doc 4'},
          {name: 'doc 8'}, 
          {name: 'doc 9'}
        ],      
      }, 
      {
        name: 'Liasse 2',
        children: [
          {name: 'doc 4'},
          {name: 'doc 8'},
          {name: 'doc 9'}
        ],      
      }
    ],
  },
  {
    name: 'Interne',
    children: [
      {
        name: 'Liasse 1',
        children: [
          {name: 'doc 4'}, 
          {name: 'doc 8'}, 
          {name: 'doc 9'}
        ],      
      }, 
      {
        name: 'Liasse 2',
        children: [
          {name: 'doc 4'},
          {name: 'doc 8'}, 
          {name: 'doc 9'}
        ],      
      }, 
      {
        name: 'Liasse 2',
        children: [
          {name: 'doc 4'},
          {name: 'doc 8'},
          {name: 'doc 9'}
        ],      
      }
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-list-typeliasse',
  templateUrl: './list-typeliasse.component.html',
  styleUrls: ['./list-typeliasse.component.scss']
})
export class ListTypeliasseComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private openDialogService: OpenDialogService) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

  openDialogHistoric(event: MouseEvent) {    
    this.openDialogService.openDialog(ReadTypeliasseComponent, event);
  }

  openDialogSearchLiasse(event: any) {
    this.openDialogService.openDialog(SearchLiasseComponent, event);
  }

  newTypeLiasse(event: MouseEvent) {    
    this.openDialogService.openDialog(CreateTypeliasseComponent, event);
  }
  openDialogUpdateLiasse(event: MouseEvent) {    
    this.openDialogService.openDialog(UpdateTypeliasseComponent, event);
  }


}
