import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-table',
  templateUrl: './nav-table.component.html',
  styleUrls: ['./nav-table.component.scss']
})
export class NavTableComponent implements OnInit {
  @Input() pageNumber!: number;
  @Input() totalPages!: number;
  @Input() totalElements!: number;  
  @Input() last!: boolean;
  @Input() first!: boolean;
  @Input() size!: number;
  @Output() changePageAndSize = new EventEmitter<{page: number, size: number}>();
  
  constructor() { }

  ngOnInit(): void {
    
  }
  onNext(){
    this.changePageAndSize.emit({page: this.pageNumber+1, size: this.size});
  }
  onPreview(){
    this.changePageAndSize.emit({page: this.pageNumber-1, size:  this.size});
  }

  onChangeSize(){
    this.changePageAndSize.emit({page: 0, size:  this.size});
  }
}
