import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-doc',
  templateUrl: './list-doc.component.html',
  styleUrls: ['./list-doc.component.scss']
})
export class ListDocComponent implements OnInit {

  postesList: string [] = ['Poste 1', 'Poste 2', 'Poste 3', 'Poste 4', 'Poste 5','Poste 6', 'Poste 7', 'Poste 8', 'Poste 9', 'Poste 10'];
  constructor() { }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  ngOnInit(): void {
  }

}
