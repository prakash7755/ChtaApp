import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard/auth-guard.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
   
  constructor(private userAuth: AuthGuardService, private router: Router, private route: ActivatedRoute) { 
  	this.logoutUser();
  }

  logoutUser(){
  	this.userAuth.logout()
    this.router.navigate(['/login']);
  }



  ngOnInit() {
  }

}
