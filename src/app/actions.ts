import { Action } from '@ngrx/store';
import { IMessage } from './message';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ACK_MESSAGE = 'ACK_MESSAGE';

export class AddMessage implements Action {
  readonly type = ADD_MESSAGE;
  constructor(public readonly payload: IMessage) {}
}

export class AckMessage implements Action {
  readonly type = ACK_MESSAGE;
  constructor(public readonly payload: number) {}
}

export type All = AddMessage | AckMessage;
