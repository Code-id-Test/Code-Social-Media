import axios from "axios";
import { GET_USER_POSTS, GET_USER_POSTS_ERROR } from "../constants";

interface GetUserPostsProps {
  userId: number;
  onSuccess?: () => void;
  onError?: () => void;
}

const setError = (err: any) => {
  return {
    type: GET_USER_POSTS_ERROR,
    payload: err,
  };
};

export default (props: GetUserPostsProps) => {
  return async (dispatch: any) =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${props.userId}/posts`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_USER_POSTS,
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
