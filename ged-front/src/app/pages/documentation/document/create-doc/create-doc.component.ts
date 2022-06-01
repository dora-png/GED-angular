import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-create-doc',
  templateUrl: './create-doc.component.html',
  styleUrls: ['./create-doc.component.scss']
})
export class CreateDocComponent implements OnInit {

  constructor() {
    
  }

 ngOnInit(): void {
 }

 foods: Food[] = [
   {value: 'docx', viewValue: 'DOCX'},
   {value: 'doc', viewValue: 'DOC'},
   {value: 'pdf', viewValue: 'PDF'},
   {value: 'xls', viewValue: 'XLS'},
 ];


}
