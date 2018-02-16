import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public user
  constructor(private route: ActivatedRoute,
  private router: Router, private userServ: UserServiceService) {
    this.user = {};
  }

  newUser() {
    if (this.user.password === this.user.coPassword) {
      this.userServ.createUser(this.user)
      .then((data:any) => {
        localStorage.setItem('token', data.token);
             this.router.navigate(['/chat']);
       })
       .catch(err => {
        console.log('login user error ', err)
       })
    } else {
      console.log('user password and Confirm password Wrong')
    }
  }


  ngOnInit() {}

}
