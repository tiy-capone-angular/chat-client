import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  constructor(
    private chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.chatService
      .signIn(this.userName)
      .subscribe(
        id => {
          this.router.navigate(['chatroom']);
          console.log(id);
        },
        e => console.error(e)
      )
  }

}
