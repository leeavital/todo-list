import { initialState, IState } from "./reducer";
import { IAction } from "./actions";
import { shallowCopy } from "./shallowCopy";

export function submitTodoReducer(state: IState = initialState, action: IAction) {
  switch(action.type) {
    case "top::submitTodo":
      let copy = shallowCopy(state);
      copy.todos = shallowCopy(copy.todos);

      let errors = [];
      if (action.todo.name == null || action.todo.name === "") {
        //TODO: check facets
        errors.push("name must not be empty");
      }

      if (errors.length > 0) {
          copy.todos.createErrors = errors;   
          return copy;
      }

      // past this point, input is okay and we can change the state
      copy.todos.todos = copy.todos.todos.concat(action.todo);
      copy.isCreating = false;
      copy.todos.createErrors = [];
      return copy;

    default:
      return state;
  }
}
