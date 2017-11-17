import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { IMessage } from '../message';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  messages: IMessage[];
  words: string;

  constructor(
    private chatService: ChatService
  ) {
    this.messages = [];
  }

  ngOnInit() {
    this.chatService
      .messages
      .subscribe(
        message => this.messages.push(message)
      );
  }

  sendWords() {
    this.chatService
      .sendMessage(this.words);
    this.words = '';
  }

}
