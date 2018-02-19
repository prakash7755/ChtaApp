
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';



@Injectable()
export class CanActivateService implements CanActivate {

  constructor(private userAuth: AuthGuardService) { }


  canActivate(){
  	return this.userAuth.isLoggedIn()
  }

}
