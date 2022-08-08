import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/loader/authentication.service';
//import { LiasseControllerService } from 'src/app/model';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  movies = [
    {
      title: 'Episode I - The Phantom Menace',
    },
    {
      title: 'Episode II - Attack of the Clones',
    },
    {
      title: 'Episode III - Revenge of the Sith',
    },
    {
      title: 'Episode IV - A New Hope',
    },
    {
      title: 'Episode V - The Empire Strikes Back',
    },
    {
      title: 'Episode VI - Return of the Jedi',
    },
    {
      title: 'Episode VII - The Force Awakens',
    },
    {
      title: 'Episode VIII - The Last Jedi',
    },
    {
      title: 'Episode IX – The Rise of Skywalker',
    },
    {
      title: 'Episode I - The Phantom Menace',
    },
    {
      title: 'Episode II - Attack of the Clones',
    },
    {
      title: 'Episode III - Revenge of the Sith',
    },
    {
      title: 'Episode IV - A New Hope',
    },
    {
      title: 'Episode V - The Empire Strikes Back',
    },
    {
      title: 'Episode VI - Return of the Jedi',
    },
    {
      title: 'Episode VII - The Force Awakens',
    },
    {
      title: 'Episode VIII - The Last Jedi',
    },
    {
      title: 'Episode IX – The Rise of Skywalker',
    },
  ];
 
  constructor(
    private auth: AuthenticationService,
    //private apiService: LiasseControllerService
  ) { }

  ngOnInit(): void {
   // this.apiService.
  }

}
