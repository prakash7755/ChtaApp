import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserChatMsgComponent } from './user-chat-msg/user-chat-msg.component';


import { UserServiceService } from './services/user-service/user-service.service';
import { ChatAppServiceService } from './services/chat-app-service/chat-app-service.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { CanActivateService } from './services/auth-guard/can-activate.service';
import { LogoutComponent } from './logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
    UserChatMsgComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserServiceService, ChatAppServiceService, AuthGuardService, CanActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
