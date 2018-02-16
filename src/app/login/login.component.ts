import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;


  constructor(private userServ: UserServiceService,  private route: ActivatedRoute,
  private router: Router) { 
      this.user = {};
  }
   


     verifyUser(){
     	 this.userServ.loginUser(this.user)
     	 .then((data:any) => {
          this.router.navigate(['/chat']);
     	 })
     	 .catch(err => {
     	 	console.log('login user error ', err)
     	 })
     }

     
  ngOnInit() {
  }

}
