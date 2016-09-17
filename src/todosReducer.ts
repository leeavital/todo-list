import { IAction } from "./actions";

export interface ITodosState {
  todos: any[];
}

const initialTodos: ITodosState = {
  todos: []
};

export function todosReducer(state: ITodosState = initialTodos, action: IAction) {
  switch (action.type) {
    case "addTodo":
      const todos = state.todos.concat(action.todo);
      return Object.assign({}, state, {todos});
    default:
      return state;
  }
}
