import { shallowCopy } from "./shallowCopy";

import { IOntologyState, IFacet } from "./ontology";

const initialState: IOntologyState = {
  facets: [],
  isEditing: false,
};

export interface ISubmitFacet {
  type: "ontology::submitFacet";
  facet: IFacet;
};

export interface IOpenEditor {
  type: "ontology::openEditor";
  open: boolean;
}

export interface IRemoveFacet {
  type: "ontology::removeFacet";
  id: number;
}

export type IOntologyAction = ISubmitFacet | IOpenEditor | IRemoveFacet;

export function ontologyReducer(state: IOntologyState = initialState, action: IOntologyAction): IOntologyState {
  switch (action.type) {
    case "ontology::submitFacet":
      return IOntologyState.addFacet(state, action.facet);
    case "ontology::openEditor":
      return IOntologyState.setOpen(state, action.open);
    case "ontology::removeFacet":
      return IOntologyState.removeFacetById(state, action.id);
    default:
      return state;
  }
}
