import { GET_PROJECT_STATUS } from "../actions/types";

const initialState = {
  status: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT_STATUS:
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
}
