import { Component, OnInit } from '@angular/core';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { OrganigramStructureComponent } from '../organigram-structure/organigram-structure.component';

@Component({
  selector: 'app-organigram',
  templateUrl: './organigram.component.html',
  styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit {

  constructor(private openDialogService: OpenDialogService) { }

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
  test(event: any){
    this.openDialogService.openDialog(OrganigramStructureComponent,event);
  }

}
