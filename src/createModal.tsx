import * as React from "react";
import { IFacet } from "./ontology";
import { IState } from "./reducer";
import { ITodo } from "./todosReducer";
import { Modal } from "./modal";
import { connect } from "react-redux";
import { setCreatingTodo, submitTodo } from "./actions";

const actionCreators: IDispatchProps = {
  submitTodo,
  closeModal: () => setCreatingTodo(false),
};

function selectProps(state: IState) {
  return {
    facets: state.ontology.facets
  };
}

interface IDispatchProps {
  closeModal: (() => void);
  submitTodo: ((todo: ITodo) => void);
}

interface IActionProps {
  facets: IFacet[];
}

@connect(selectProps, actionCreators)
export class CreateModal extends React.Component<IDispatchProps & IActionProps, {}> {

  render() {
    return (
      <Modal>
        <button onClick={this.props.closeModal}>close</button>
        Create Modal

        <form onSubmit={this.handleSubmit}>
          <input type="text" className="todoInput" placeholder="todo" />

          {this.renderFacetInputs()}

          <input type="submit" />
        </form>
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

  private handleSubmit = (e: any) => {
    e.nativeEvent.preventDefault();

    const todoName: string = e.nativeEvent.target.querySelector(".todoInput").value;
    this.props.submitTodo({
      name: todoName,
      id: Math.random(),
      metadata: {}
    });
  }
}
