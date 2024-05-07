import { GET_ALBUM_PHOTOS, GET_ALBUM_PHOTOS_ERROR } from "../constants";

const initialState = {
  data: "",
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALBUM_PHOTOS:
      return {
        data: action.payload,
        error: null,
      };

    case GET_ALBUM_PHOTOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
