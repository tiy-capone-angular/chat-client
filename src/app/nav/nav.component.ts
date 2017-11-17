import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { Router } from '@angular/router';
import { IAppState } from '../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input()
  appAutofocusShouldSelect: boolean;

  isLoggedIn: string;
  unackCount: number;

  constructor(
    private chatService: ChatService,
    private router: Router,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.chatService
      .userLoggedIn
      .subscribe(id => this.isLoggedIn = id);
    this.store
      .select('messages')
      .subscribe(messages => {
        this.unackCount = messages
          .map(val => val.ack ? 0 : 1)
          .reduce((acc, val) => acc + val, 0);
      });
  }

  doLogout(): void {
    this.chatService
      .signOut()
      .subscribe(
        () => {
          this.router.navigate(['']);
        },
        () => this.doLogout()
      );
  }

}
