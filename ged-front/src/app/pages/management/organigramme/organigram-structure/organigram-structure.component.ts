import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-organigram-structure',
  templateUrl: './organigram-structure.component.html',
  styleUrls: ['./organigram-structure.component.scss']
})
export class OrganigramStructureComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef:  MatDialogRef<OrganigramStructureComponent>
  ) { }
  ngOnInit(): void {
    
  }
  nodes: any = [
    {
      name: 'Sundar Pichai',
      cssClass: 'ngx-org-ceo',
      image: '../../../../../assets/node.svg',
      title: 'Chief Executive Officer',
      childs: [
        {
          name: 'Thomas Kurian',
          cssClass: 'ngx-org-ceo',
          image: '../../../../../assets/node.svg',
          title: 'CEO, Google Cloud',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: '../../../../../assets/node.svg',
          title: 'CEO, YouTube',
          childs: [
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',
              image: '../../../../../assets/node.svg',
              title: 'Global Head of Business Operations',
              childs: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',
              image: '../../../../../assets/node.svg',
              title: 'VP, Agency and Brand Solutions',
              childs: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: '../../../../../assets/node.svg',
              title: 'VP, Product Management',
              childs: []
            }
          ]
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',
          image: '../../../../../assets/node.svg',
          title: 'Head of Artificial Intelligence',
          childs: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',
              image: '../../../../../assets/node.svg',
              title: 'CEO, Google Health',
              childs: []
            }
          ]
        }
      ]
    }
  ];
  test(event: any){}
  onCloseModal(){
    this.dialogRef.close();
  }
}
