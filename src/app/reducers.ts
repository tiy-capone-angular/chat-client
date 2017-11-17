import * as Actions from './actions';
import { IMessage } from './message';

export type Action = Actions.All;

export function messageReducer(state: IMessage[], action: Action): IMessage[] {
  switch(action.type) {
    case Actions.ADD_MESSAGE:
      return [
        ...state,
        action.payload
      ];
    case Actions.READ_MESSAGE:
      return state;
    default:
      return state;
  }
}
