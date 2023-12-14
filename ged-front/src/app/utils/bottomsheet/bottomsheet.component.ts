import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ReadDocComponent } from '../../pages/documentation/document/read-doc/read-doc.component';
import { UpdateDocComponent } from '../../pages/documentation/document/update-doc/update-doc.component';
@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.scss']
})
export class BottomsheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>, public dialog: MatDialog) {}

   ngOnInit(): void {
  }

  openDialog(event: MouseEvent) {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    const dialogRef = this.dialog.open(ReadDocComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEdit(event: MouseEvent) {
    
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    const dialogRef = this.dialog.open(UpdateDocComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

