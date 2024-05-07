import { GET_POST_COMMENTS, GET_POST_COMMENTS_ERROR } from "../constants";

const initialState = {
  data: "",
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return {
        data: action.payload,
        error: null,
      };

    case GET_POST_COMMENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
