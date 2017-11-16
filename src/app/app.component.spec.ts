import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login/login.component';
import { ChatService } from './chat/chat.service';

import 'rxjs/add/observable/empty';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './autofocus.directive';
import { ChatServiceStub } from '../test/chat-service-stub';

describe('AppComponent', () => {
  beforeEach(async(() => {
    delete AutofocusDirective.firstFound; // must be done to reset firstFound correctly
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render an app-nav', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-nav')).toBeTruthy();
  }));
});
