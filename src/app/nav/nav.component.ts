import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn: string;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService
      .userLoggedIn
      .subscribe(id => this.isLoggedIn = id);
  }

}
