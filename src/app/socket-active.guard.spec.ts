import { TestBed, async, inject } from '@angular/core/testing';

import { SocketActiveGuard } from './socket-active.guard';
import { ChatService } from './chat/chat.service';
import { ChatServiceStub } from '../test/chat-service-stub';
import { RouterTestingModule } from '@angular/router/testing';

describe('SocketActiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SocketActiveGuard,
        { provide: ChatService, useValue: new ChatServiceStub() }
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    });
  });

  it('should ...', inject([SocketActiveGuard], (guard: SocketActiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
