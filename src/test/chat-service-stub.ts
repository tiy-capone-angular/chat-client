import { Observable } from "rxjs/Observable";

export class ChatServiceStub {
  get messages(): Observable<any> {
    return Observable.empty<any>();
  }

  userLoggedIn = new Observable<string>(observer => observer.complete());
}
