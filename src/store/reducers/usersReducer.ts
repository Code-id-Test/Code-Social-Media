import { GET_USERS, GET_USERS_ERROR } from "../constants";

const initialState = {
  data: "",
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS:
      return {
        data: action.payload,
        error: null,
      };

    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
