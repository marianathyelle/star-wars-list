// TYPES

export const Types = {
  GET_DATA: 'people/GET_DATA',
  UPDATE_DATA: 'people/UPDATE_DATA',
  GET_MORE_DATA: 'people/GET_MORE_DATA',
  SHOW_MORE_DATA: 'people/SHOW_MORE_DATA',
  NO_DATA_TO_SHOW: 'people/NO_DATA_TO_SHOW',
} 

// ACTIONS
export const Creators = {
  getPeople: () => ({
    type: Types.GET_DATA,
  }),

  updatePeople: data => ({
    type: Types.UPDATE_DATA,
    payload: { data },
  }),

  getMorePeople: page => ({
    type: Types.GET_MORE_DATA,
    payload: { page },
  }),

  showMorePeople: response => ({
    type: Types.SHOW_MORE_DATA,
    payload: { response },
  }),

  nothingToShow: () => ({
    type: Types.NO_DATA_TO_SHOW,
  }),
}

// REDUCER
const INITIAL_STATE = {
  hasPeopleToShow: false,
  loadingInitial: true,
  loading: false,
  data: [],
};

export default function people(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_DATA:
      return {...state, loadingInitial: false, hasPeopleToShow: true, data: action.payload.data};
    case Types.GET_MORE_DATA:
      return {...state, loading: true}
    case Types.SHOW_MORE_DATA: 
      return {...state, loading: false, data: [...state.data, ...action.payload.response]}
    case Types.NO_DATA_TO_SHOW:
      return {...state, hasPeopleToShow: false}
    default:
      return state;
  }
}