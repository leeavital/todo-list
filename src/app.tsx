import * as React from "react";
import { IState } from "./reducer";
import { addTodo, setCreatingTodo } from "./actions";
import { connect } from "react-redux";
import { TodoList } from "./todoList";
import { CreateModal } from "./createModal";
import { OntologyModal } from "./ontologyModal";
import { openOntologyEditor } from "./ontologyActions";

export interface IAppProps {
  todosCount?: number;
  isCreating?: boolean;
  isOntologyEditorOpen: boolean;
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
    console.log(this.props);

    let maybeCreateModal = this.props.isCreating ? <CreateModal /> : null;
    let maybeOntologyModal = this.props.isOntologyEditorOpen ? <OntologyModal /> : null;

    return (
      <div>
        <h1>{this.props.todosCount} todos</h1>

        <TodoList />

        <button onClick={this.props.startCreating}>create</button>
        <button onClick={this.props.editOntology}>edit ontology</button>

        {maybeCreateModal}
        {maybeOntologyModal}
      </div>
    );
  }
}

function selectProps(state: IState): IAppProps {
  return {
    todosCount: state.todos.todos.length,
    isCreating: state.isCreating,
    isOntologyEditorOpen: state.ontology.isEditing,
  }
}

