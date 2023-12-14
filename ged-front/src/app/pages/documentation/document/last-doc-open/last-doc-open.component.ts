import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
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
    name: 'Mes Dossiers',
    children: [
      {
        name: 'Liasse 1',   
      }, 
      {
        name: 'Liasse 2',    
      }, 
      {
        name: 'Liasse 2',     
      }
    ],
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-last-doc-open',
  templateUrl: './last-doc-open.component.html',
  styleUrls: ['./last-doc-open.component.scss']
})
export class LastDocOpenComponent implements OnInit {
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
}
