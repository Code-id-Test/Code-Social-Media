import axios from "axios";
import { GET_USER_ALBUMS, GET_USER_ALBUMS_ERROR } from "../constants";

interface GetUserAlbumsProps {
  userId: number;
  onSuccess?: () => void;
  onError?: () => void;
}

const setError = (err: any) => {
  return {
    type: GET_USER_ALBUMS_ERROR,
    payload: err,
  };
};

export default (props: GetUserAlbumsProps) => {
  return async (dispatch: any) =>
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${props.userId}/albums`,
        {
          headers: { Accept: "application/json" },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_USER_ALBUMS,
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
