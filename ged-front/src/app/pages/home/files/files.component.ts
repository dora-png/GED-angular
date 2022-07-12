import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
