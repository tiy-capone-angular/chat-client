import { TestBed, async, inject } from '@angular/core/testing';

import { SocketActiveGuard } from './socket-active.guard';

describe('SocketActiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketActiveGuard]
    });
  });

  it('should ...', inject([SocketActiveGuard], (guard: SocketActiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
