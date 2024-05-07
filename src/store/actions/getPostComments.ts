import axios from "axios";
import { GET_POST_COMMENTS, GET_POST_COMMENTS_ERROR } from "../constants";

interface GetPostDetailsProps {
  postId: number;
  onSuccess?: () => void;
  onError?: () => void;
}

const setError = (err: any) => {
  return {
    type: GET_POST_COMMENTS_ERROR,
    payload: err,
  };
};

export default (props: GetPostDetailsProps) => {
  return async (dispatch: any) =>
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`,
        {
          headers: { Accept: "application/json" },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_POST_COMMENTS,
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
