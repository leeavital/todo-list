import * as React from "react";
import { IFacet } from "./ontology";
import { IState } from "./reducer";
import { ITodo } from "./todosReducer";
import { Modal } from "./modal";
import { connect } from "react-redux";
import { setCreatingTodo, submitTodo } from "./actions";

import { Button, Input } from "muicss/react";

const actionCreators: IActionProps = {
  submitTodo,
  closeModal: () => setCreatingTodo(false),
};

function selectProps(state: IState): IDispatchProps {
  return {
    facets: state.ontology.facets,
    errors: state.todos.createErrors,
    shouldShow: state.isCreating,
  };
}

interface IDispatchProps {
  facets: IFacet[];
  errors: string[];
  shouldShow: boolean;
}

interface IActionProps {
  closeModal: (() => void);
  submitTodo: ((todo: ITodo) => void);
}

@connect(selectProps, actionCreators)
export class CreateModal extends React.Component<IDispatchProps & IActionProps, {}> {

  render() {
    if (!this.props.shouldShow) {
      return null;
    }

    return (
      <Modal>
        <Button onClick={this.props.closeModal}>close</Button>

        <br />

        <form onSubmit={this.handleSubmit}>
          <Input type="text" className="todoInput" placeholder="todo" />

          {this.renderFacetInputs()}

          <Button type="submit" className="mui--pull-right">submit</Button>
        </form>

        {this.renderErrors()}
      </Modal>
    );
  }

  private renderFacetInputs() {
    let is = this.props.facets.map(facet => {
      return (
        <div key={facet.id}>
          <label data-facet-name={facet.name}>
            {facet.name}
            <input className="facet-input" data-facet-id={facet.id} type="text" placeholder={facet.name} />
          </label>
        </div>
      );
    });

    return (<ul>{is}</ul>);
  }

  private renderErrors() {
    const errors = this.props.errors.map(err => {
      return <li key={err}>{err}</li>
    });

    return (<ul>{errors}</ul>);
  }

  private handleSubmit = (e: any) => {
    e.nativeEvent.preventDefault();

    const todoName: string = e.nativeEvent.target.querySelector(".todoInput input").value;
    this.props.submitTodo({
      name: todoName,
      id: Math.random(),
      metadata: {}
    });
  }
}
