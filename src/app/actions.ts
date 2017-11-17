import { Action } from '@ngrx/store';
import { IMessage } from './message';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const READ_MESSAGE = 'READ_MESSAGE';

export class AddMessage implements Action {
  readonly type = ADD_MESSAGE;
  constructor(public readonly payload: IMessage) {}
}

export class ReadMessage implements Action {
  readonly type = READ_MESSAGE;
  constructor(public readonly payload: number) {}
}

export type All = AddMessage | ReadMessage;
