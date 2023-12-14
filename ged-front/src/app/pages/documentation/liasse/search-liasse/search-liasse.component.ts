import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-search-liasse',
  templateUrl: './search-liasse.component.html',
  styleUrls: ['./search-liasse.component.scss']
})
export class SearchLiasseComponent implements OnInit {

  typeLiasseName? : string;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ExampleFlatNode
  ) { }

  ngOnInit(): void {
    this.typeLiasseName=this.data.name;
  }

}
