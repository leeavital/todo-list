import { IFacet } from "./ontology"
import { IOntologyAction } from "./ontologyReducer";

export function submitFacet(facet: IFacet): IOntologyAction {
  return {
    type: "ontology::submitFacet",
    facet
  };
}

export function openOntologyEditor(open: boolean): IOntologyAction {
  return {
    type: "ontology::openEditor",
    open
  }
}
