import { ITodo } from "./todosReducer";
import { IState } from "./reducer";

export interface IAddTodo {
  type: "todos::addTodo";
  todo: ITodo;
}

export interface IClearTodos {
  type: "todos::clearTodos";
}

export interface ISetCreatingTodo {
  type: "todos::creatingTodo";
  open: boolean;
}

export interface ISubmitTodo {
  type: "top::submitTodo",
  todo: ITodo,
}

export interface ILoadState {
  type: "top::loadState";
  state: IState;
}

export interface IRemoveTodo {
  type: "todos::removeTodo";
  id: number;
}

export type IAction = IAddTodo | IClearTodos | ISetCreatingTodo | ISubmitTodo | IRemoveTodo | ILoadState;

// attempts to submit a todo and either sets
export function submitTodo(todo: ITodo): ISubmitTodo {
  return {
    type: "top::submitTodo",
    todo: todo,
  }
}

export function removeTodo(id: number): IAction {
  return {
    type: "todos::removeTodo",
    id
  };
}

export function addTodo(todo: ITodo): IAction {
  return {
    type: "todos::addTodo",
    todo: todo
  }
}

export function setCreatingTodo(creating: boolean): IAction {
  return {
    type: "todos::creatingTodo",
    open: creating,
  }
}

export function loadState(state: IState): IAction {
  return {
    type: "top::loadState",
    state,
  }
}
