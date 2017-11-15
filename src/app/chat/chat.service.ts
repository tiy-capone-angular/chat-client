import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs/Subject';

export interface IMessage {
  id: string,
  msg: string
}

@Injectable()
export class ChatService {

  userLoggedIn: Subject<string>;

  private socket: SocketIOClient.Socket;

  constructor() {
    this.userLoggedIn = new Subject<string>();
  }

  get isConnected(): boolean {
    return this.socket !== undefined;
  }

  sendMessage(message: string): void {
    this.socket.emit('chat message', message);
  }

  get messages(): Observable<IMessage> {
    return new Observable<IMessage>(observer => {
      if (this.socket === undefined) {
        return observer.error('This socket is not connected');
      }
      this.socket.on('chat message', message => {
        observer.next(message as IMessage);
      })
    });
  }

  signIn(userName: string): Observable<string> {
    return new Observable<string>(observer => {
      this.socket = io.connect('http://localhost:5000');
      this.socket.on('connect', () => {
        this.socket.emit('user named', userName);
        observer.next(this.socket.id);
        this.userLoggedIn.next(this.socket.id);
      });
    });
  }

}
