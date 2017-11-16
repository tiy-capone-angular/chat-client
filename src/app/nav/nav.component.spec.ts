import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { ChatServiceStub } from '../../test/chat-service-stub';
import { ChatService } from '../chat/chat.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from '../autofocus.directive';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    delete AutofocusDirective.firstFound; // must be done to reset firstFound correctly
    TestBed.configureTestingModule({
      declarations: [
        NavComponent,
        AutofocusDirective
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: ChatService, useValue: new ChatServiceStub() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
