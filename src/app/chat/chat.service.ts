import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as io from 'socket.io-client';

import { IMessage } from '../message';
import { IAppState } from '../app.state';
import { AddMessage } from '../actions';

@Injectable()
export class ChatService {

  userLoggedIn: Subject<string>;

  private socket: SocketIOClient.Socket;

  constructor(
    private store: Store<IAppState>
  ) {
    this.userLoggedIn = new Subject<string>();
  }

  get isConnected(): boolean {
    return this.socket !== undefined;
  }

  sendMessage(message: string): void {
    this.socket.emit('chat message', message);
  }

  // THIS IS NO LONGER NEEDED BECAUSE I AM USING
  // A STORE
  // get messages(): Observable<IMessage> {
  //   return this.messagesHistorySubject;

    // MOVED TO LOGIN
    // return new Observable<IMessage>(observer => {
    //   if (this.socket === undefined) {
    //     return observer.error('This socket is not connected');
    //   }
    //   this.socket.on('chat message', message => {
    //     observer.next(message as IMessage);
    //   })
    // });
  // }

  signOut(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.socket.disconnect();
      delete this.socket;
      this.userLoggedIn.next();
      observer.next();
      observer.complete();
    });
  }

  signIn(userName: string): Observable<string> {
    return new Observable<string>(observer => {
      this.socket = io.connect('http://localhost:5000');
      this.socket.on('connect', () => {
        this.socket.emit('user named', userName);
        observer.next(this.socket.id);
        this.userLoggedIn.next(this.socket.id);
        this.socket.on('chat message', message => {
          this.store.dispatch(new AddMessage(message));
        });
      });
    });
  }

}
