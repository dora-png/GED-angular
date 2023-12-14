import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import * as constante from '../../../loader/constante';

@Component({
  selector: 'app-manage-index',
  templateUrl: './manage-index.component.html',
  styleUrls: ['./manage-index.component.scss']
})
export class ManageIndexComponent implements OnInit {

  constantes: any = constante;
  constructor(
    private auth: AuthenticationService) { }
    
  onHasRole(role:string): boolean{
    return this.auth.getRoles(role);
  }
  ngOnInit(): void {
  }

}
