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
  let stub: ChatServiceStub;

  beforeEach(async(() => {
    delete AutofocusDirective.firstFound; // must be done to reset firstFound correctly

    stub = new ChatServiceStub();
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
        { provide: ChatService, useValue: stub }
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

  it('should show a login link when initially rendered', () => {
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    const anchors = el.querySelectorAll('a');
    const linkTexts = Array.from(anchors)
      .map((x: HTMLElement) => x.innerHTML)
    expect(linkTexts).toContain('Login');
  });

  describe('after login', () => {
    it('should show a "chat room" link', () => {
      // arrange
      stub.userLoggedIn.next('this is an id');

      // act
      fixture.detectChanges();

      // assert
      const el = fixture.debugElement.nativeElement;
      const anchors = el.querySelectorAll('a');
      const linkTexts = Array.from(anchors)
        .map((x: HTMLElement) => x.innerHTML)
      expect(linkTexts).toContain('Chat room');
    });

    it('should show a "Logout" button', () => {
      // arrange
      stub.userLoggedIn.next('this is an id');

      // act
      fixture.detectChanges();

      // assert
      const el = fixture.debugElement.nativeElement;
      const anchors = el.querySelectorAll('button');
      const linkTexts = Array.from(anchors)
        .map((x: HTMLElement) => x.innerHTML)
      expect(linkTexts).toContain('Logout');
    });

    it('the isLoggedIn property is truthy', () => {
      // arrange
      stub.userLoggedIn.next('this is an id');

      // act
      fixture.detectChanges();

      // assert
      expect(component.isLoggedIn).toBeTruthy();
    });
  });
});
