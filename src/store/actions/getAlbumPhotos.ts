import axios from "axios";
import { GET_ALBUM_PHOTOS, GET_ALBUM_PHOTOS_ERROR } from "../constants";

interface GetUserAlbumsProps {
  albumId: number;
  onSuccess?: () => void;
  onError?: () => void;
}

const setError = (err: any) => {
  return {
    type: GET_ALBUM_PHOTOS_ERROR,
    payload: err,
  };
};

export default (props: GetUserAlbumsProps) => {
  return async (dispatch: any) =>
    axios
      .get(
        `https://jsonplaceholder.typicode.com/albums/${props.albumId}/photos`,
        {
          headers: { Accept: "application/json" },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_ALBUM_PHOTOS,
            payload: res.data,
          });
          if (props.onSuccess) {
            props.onSuccess();
          }
        }
      })
      .catch((err) => {
        dispatch(setError(err));
        if (props.onError) {
          props.onError();
        }
      });
};
