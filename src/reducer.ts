import { combineReducers } from 'redux';

import { todosReducer, ITodosState } from "./todosReducer"
import { IAction, submitTodo } from "./actions";
import { ontologyReducer } from "./ontologyReducer";
import { IOntologyState } from "./ontology";
import { submitTodoReducer } from "./submitReducer";

export interface IState {
  todos: ITodosState;
  isCreating: boolean;
  ontology: IOntologyState;
}

export const initialState: IState = {
  todos: {
    todos: [],
    createErrors: []
  },
  isCreating: false,
  ontology: null, //TODO
}

function creatingReducer(state: boolean = false, action: IAction): boolean {
  switch (action.type) {
    case "creatingTodo":
      return action.open;
    default:
      return state;
  }
}

function foldTop(...fns: any[]) {
  return function(state, action) {
    let nextState = state;
    for (let fn of fns) {
      nextState = fn(nextState, action);
    }
    return nextState;
  }
}

export const reduce = foldTop(
    combineReducers({
      todos: todosReducer,
      isCreating: creatingReducer,
      ontology: ontologyReducer,
    }),
    submitTodoReducer
  );
