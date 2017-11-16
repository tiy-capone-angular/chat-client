import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input()
  appAutofocusShouldSelect: boolean;

  isLoggedIn: string;

  constructor(
    private chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit() {
    this.chatService
      .userLoggedIn
      .subscribe(id => this.isLoggedIn = id);
    console.log('nav should select:', this.appAutofocusShouldSelect);
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
