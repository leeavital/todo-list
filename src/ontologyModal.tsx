import * as React from "react";
import { Button, Input, Panel } from "muicss/react";
import { IFacet} from "./ontology";
import { IState } from "./reducer";
import { Modal } from "./modal";
import { connect } from "react-redux";
import { submitFacet, removeFacet, openOntologyEditor } from "./ontologyActions";

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
        return (<Panel key={fac.id}>
          {fac.name}
          <br />
          <Button color="danger" onClick={() => this.props.removeFacet(fac.id)}>remove</Button>
        </Panel>);
    });

    return (
      <Modal>
        <Button onClick={this.props.closeEditor}>close</Button>
        <div>
          {items}
        </div>

        <form onSubmit={this.handleSubmit}>
          <Input type="text" hint="name" />

          <Button type="submit">submit</Button>
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
