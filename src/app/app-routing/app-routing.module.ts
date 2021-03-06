import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';


import { CanActivateService } from '../services/auth-guard/can-activate.service';



import { LoginComponent } from '../login/login.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { UserChatMsgComponent } from '../user-chat-msg/user-chat-msg.component';
import { LogoutComponent } from '../logout/logout.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'chat', component: UserChatMsgComponent, canActivate: [CanActivateService] }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
