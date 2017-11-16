import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from '../autofocus.directive';
import { ChatService } from '../chat/chat.service';
import { ChatServiceStub } from '../../test/chat-service-stub';
import { RouterTestingModule } from '@angular/router/testing';
import { ElementRef } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    delete AutofocusDirective.firstFound; // must be done to reset firstFound correctly
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        AutofocusDirective
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: ChatService, useValue: new ChatServiceStub() },
        { provide: ElementRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('login component should create');
    expect(component).toBeTruthy();
  });
});
