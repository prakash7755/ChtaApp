import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot}  from '@angular/router';
import { UserAuthService }    from '../auth.service/user-auth.service.ts';

@Injectable()
export class AuthGuardService {

  constructor() { }

}
