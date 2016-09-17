import { shallowCopy } from "./shallowCopy";

export interface IFacet {
  name: string;
  required: boolean;
  id: number;
  //TODO: datatype, etc.
}

export interface IOntologyState {
  facets: IFacet[];
  isEditing: boolean;
}

// companion object which does immutable transforms on IOntologyState
export const IOntologyState = {
  addFacet: function(state: IOntologyState, facet: IFacet): IOntologyState {
    let copy = shallowCopy(state);
    copy.facets = copy.facets.concat(facet);
    return copy;
  },

  removeFacetById: function(state: IOntologyState, id: number): IOntologyState {
    let copy = shallowCopy(state);
    copy.facets = copy.facets.filter(facet => {
      return facet.id !== id;
    });
    return copy;
  },

  setOpen: function(state: IOntologyState, open: boolean): IOntologyState {
    let copy = shallowCopy(state)
    copy.isEditing = open;
    return copy;
  }
};
