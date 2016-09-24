import { IAction } from "./actions";
import { shallowCopy } from "./shallowCopy";

export interface ITodo {
  id: number;
  name: string;
  metadata: {[facetId: number]: string};
}

export interface ITodosState {
  todos: ITodo[];

  /**
   * The last createErrors
   */
  createErrors: string[];

  isCreating: boolean;
}

const initialTodos: ITodosState = {
  todos: [],
  createErrors: [],
  isCreating: false,
};

export function todosReducer(state: ITodosState = initialTodos, action: IAction) {
  switch (action.type) {
    case "todos::addTodo":
      const todos = state.todos.concat(action.todo);
      return Object.assign({}, state, {todos});

    case "todos::removeTodo":
      const { id } = action;
      const newTodos = state.todos.filter(todo => todo.id !== id);
      return Object.assign({}, state, {todos: newTodos});

    case "todos::creatingTodo":
      let copy = shallowCopy(state);
      copy.isCreating = action.open;
      return copy;
    default:
      return state;
  }
}
