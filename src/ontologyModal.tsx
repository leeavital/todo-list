import * as React from "react";
import { connect } from "react-redux";
import { IState } from "./reducer";
import { Modal } from "./modal";
import { submitFacet, removeFacet, openOntologyEditor } from "./ontologyActions";
import { IFacet} from "./ontology";

interface IOntologyModalDispatchProps {
  facets: IFacet[];
  shouldShow: boolean;
}

interface IOntologyModalActionProps {
  submitFacet: (facet: IFacet) => void;
  removeFacet: (id: number) => void;
  closeEditor: () => void;
}

const actions = {
  submitFacet,
  removeFacet,
  closeEditor: () => openOntologyEditor(false),
}

function selectProps(state: IState): IOntologyModalDispatchProps {
  return {
    facets: state.ontology.facets,  
    shouldShow: state.ontology.isEditing
  }
}

@connect(selectProps, actions)
export class OntologyModal extends React.Component<IOntologyModalDispatchProps & IOntologyModalActionProps, {}> {

  render() {

    if (!this.props.shouldShow) {
      return null;  
    }

    let items = this.props.facets.map(fac => {
        return (<li key={fac.id}>
          {fac.name} <button onClick={() => this.props.removeFacet(fac.id)}>remove</button>
        </li>);
    });

    return (
      <Modal>
        <button onClick={this.props.closeEditor}>close</button>
        <ul>
          {items}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input type="name" placeholder="name" />

          <button type="submit">submit</button>
        </form>
      </Modal>
    );
  }
  
  private handleSubmit = (e: any) => {
    e.nativeEvent.preventDefault();

    const name: string = e.nativeEvent.target.querySelector("input").value

    this.props.submitFacet({
      name,
      required: true,
      id: Math.random() 
    });
  }
}
