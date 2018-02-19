import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService {

  constructor() { }


  logout(){
    console.log('logout');
  	return localStorage.removeItem('token')
  }

  getUser(){
  	return localStorage.getItem('token')
  }
  isLoggedIn(){
     return this.getUser()!== null
  }  

}
