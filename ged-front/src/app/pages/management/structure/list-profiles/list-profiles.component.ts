import { Component, Input, OnInit } from '@angular/core';
import { Profiles, Structures } from 'src/app/model';
interface TypeProfile {
  value: string;
  name: string;
}

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.scss']
})
export class ListProfilesComponent implements OnInit {

  typeProfiles: TypeProfile[] = [
    {value: Profiles.TypeprofilEnum.EXTERNACTOR, name: "Utilisateur Externe"},
    {value: Profiles.TypeprofilEnum.INTERNACTOR, name: "Utilisateur Interne"},
  ];
  @Input() structure! : Structures;
  listProfiles! : Profiles[];
  constructor() { }

  ngOnInit(): void {
    this.listProfiles = this.structure.profiles!;
  }

}
