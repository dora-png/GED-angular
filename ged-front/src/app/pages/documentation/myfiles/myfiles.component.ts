import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfiles',
  templateUrl: './myfiles.component.html',
  styleUrls: ['./myfiles.component.scss']
})
export class MyfilesComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
