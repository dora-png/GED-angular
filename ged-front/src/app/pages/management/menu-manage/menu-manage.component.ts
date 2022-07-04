import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import * as constante from '../../../loader/constante';

@Component({
  selector: 'app-menu-manage',
  templateUrl: './menu-manage.component.html',
  styleUrls: ['./menu-manage.component.scss']
})
export class MenuManageComponent implements OnInit {

  constantes: any = constante;
  constructor(
    private auth: AuthenticationService) { }
    
  onHasRole(role:string): boolean{
    return this.auth.getRoles(role);
  }
  ngOnInit(): void {
  }


}
