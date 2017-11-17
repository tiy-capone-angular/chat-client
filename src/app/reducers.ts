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
    case Actions.ACK_MESSAGE:
      return state
        .map((val, index) => {
          if (action.payload === index) {
            return Object.assign({}, val, { ack: true });
          }
          return val;
        });
    default:
      return state;
  }
}
