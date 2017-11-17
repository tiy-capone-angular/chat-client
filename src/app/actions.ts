import { Action } from '@ngrx/store';
import { IMessage } from './message';

export const ADD_MESSAGE = 'ADD_MESSAGE';

export class AddMessage implements Action {
  readonly type = ADD_MESSAGE;
  constructor(public readonly payload: IMessage) {}
}

export type All = AddMessage;
