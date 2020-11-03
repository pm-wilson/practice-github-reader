import { RESET_JSON, SET_JSON } from '../actions/jsonActions';

const initialState = {
  raw: {},
  pretty: '{}',
  yaml: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_JSON:
      return {
        ...state,
        raw: action.payload,
        pretty: JSON.stringify(action.payload, null, 2),
      };
    case RESET_JSON:
      return initialState;
    default: return state;
  }
}
