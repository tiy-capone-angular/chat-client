import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    ChatroomComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
