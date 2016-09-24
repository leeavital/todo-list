import { combineReducers } from 'redux';

import { todosReducer, ITodosState } from "./todosReducer"
import { IAction, submitTodo } from "./actions";
import { ontologyReducer } from "./ontologyReducer";
import { IOntologyState } from "./ontology";
import { submitTodoReducer } from "./submitReducer";
import { loadStateReducer } from "./loadStateReducer";

export interface IState {
  todos: ITodosState;
  ontology: IOntologyState;
}

export const initialState: IState = {
  todos: {
    todos: [],
    createErrors: [],
    isCreating: false,
  },
  ontology: null, //TODO
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
      ontology: ontologyReducer,
    }),
    submitTodoReducer,
    loadStateReducer,
  );
