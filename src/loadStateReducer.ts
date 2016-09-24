import { initialState, IState } from "./reducer";
import { IAction } from "./actions";

export function loadStateReducer(state: IState = initialState, action: IAction) {
  switch(action.type) {
    case "top::loadState":
      if (action.state != null) {
        return action.state;
      } else {
        return state;
      }
    default:
      return state;
  }
}
