import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { APP_ROUTES } from './app.router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { NavComponent } from './nav/nav.component';
import { ChatService } from './chat/chat.service';
import { SocketActiveGuard } from './socket-active.guard';
import { AutofocusDirective } from './autofocus.directive';
import { StoreModule } from '@ngrx/store';

import { messageReducer } from './reducers';
import { MessageListComponent } from './message-list/message-list.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    ChatroomComponent,
    NavComponent,
    AutofocusDirective,
    MessageListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot({ messages: messageReducer }, { initialState: { messages: [] } })
  ],
  providers: [
    ChatService,
    SocketActiveGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
