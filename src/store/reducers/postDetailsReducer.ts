import { GET_POST_DETAILS, GET_POST_DETAILS_ERROR } from "../constants";

const initialState = {
  data: "",
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POST_DETAILS:
      return {
        data: action.payload,
        error: null,
      };

    case GET_POST_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
