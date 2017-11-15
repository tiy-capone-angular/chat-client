import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ChatService } from './chat/chat.service';

@Injectable()
export class SocketActiveGuard implements CanActivate {

  constructor(
    private chatService: ChatService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.chatService.isConnected) {
      this.router.navigate(['login']);
    }
    return this.chatService.isConnected;
  }
}
