import * as React from "react";
import { Appbar, Button, Container, Panel } from 'muicss/react';

import { IState } from "./reducer";
import { addTodo, setCreatingTodo } from "./actions";
import { connect } from "react-redux";
import { TodoList } from "./todoList";
import { CreateModal } from "./createModal";
import { OntologyModal } from "./ontologyModal";
import { openOntologyEditor } from "./ontologyActions";

import { overlay } from "muicss";

export interface IAppProps {
  todosCount?: number;
  startCreating?: any;
  editOntology?: any;
};

const actionCreators = {
    startCreating: () => setCreatingTodo(true),
    editOntology: () => openOntologyEditor(true),
};

@connect(selectProps, actionCreators)
export class App extends React.Component<IAppProps, {}> {
  render() {
    return (
      <div>
        <Appbar></Appbar>
        <Container>
          <Panel>
            <h1>{this.props.todosCount} todos</h1>
          </Panel>

          <TodoList />

          <Panel>
            <Button color="primary" onClick={this.props.startCreating}>create</Button>
            <Button color="primary" onClick={this.props.editOntology}>edit schema</Button>
          </Panel>
        </Container>
      </div>
    );
  }
}

function selectProps(state: IState): IAppProps {
  return {
    todosCount: state.todos.todos.length,
  }
}

