import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

export class ChatServiceStub {
  get messages(): Observable<any> {
    return Observable.empty<any>();
  }

  userLoggedIn = new Subject<string>();
}
