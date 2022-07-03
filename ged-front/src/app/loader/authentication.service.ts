import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalDaoService } from './local-dao.service';
import * as constant from './constante';
import { Users } from '../model';

@Injectable()
export class AuthenticationService {
    

    private isUserConnected : boolean = false;
    isUserSubject = new Subject<boolean>();

    constructor(private localDaoService: LocalDaoService) {
        this.isUserConnected = false;
     }

    emitUserConnected(){
        this.isUserSubject.next(this.isUserConnected);
    }

    logout() {
        this.localDaoService.removeData(constant.currentEmployee);
        this.isUserConnected = false;
        this.emitUserConnected();
    }
    

    enableHeaderBar() {
        this.isUserConnected = true;
        this.emitUserConnected();
    }

    disableHeaderBar() {
        this.isUserConnected = false;
        this.emitUserConnected();
    }

    isConnected(): boolean {
        this.isUserConnected = this.localDaoService.exists(constant.currentEmployee);
        this.emitUserConnected();
        return this.isUserConnected;
    }

    //Gestion des employés
    connectEmployee(user: Users, remember: boolean) {
        this.localDaoService.save(constant.currentEmployee, user);
        this.isUserConnected = true;
        this.emitUserConnected();
    }

}
