import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { IMessage } from '../message';
import { IAppState } from '../app.state';
import { Store } from '@ngrx/store';
import { AckMessage } from '../actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  messages$: Observable<IMessage[]>;
  words: string;

  constructor(
    private chatService: ChatService,
    private store: Store<IAppState>
  ) {
  }

  ngOnInit() {
    this.messages$ = this.store.select('messages');
  }

  sendWords() {
    this.chatService
      .sendMessage(this.words);
    this.words = '';
  }

  ack(index: number): void {
    this.store.dispatch(new AckMessage(index));
  }

}
