import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomComponent } from './chatroom.component';
import { FormsModule } from '@angular/forms';
import { ChatServiceStub } from '../../test/chat-service-stub';
import { ChatService } from '../chat/chat.service';

describe('ChatroomComponent', () => {
  let component: ChatroomComponent;
  let fixture: ComponentFixture<ChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatroomComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        { provide: ChatService, useValue: new ChatServiceStub() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
