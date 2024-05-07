import axios from "axios";
import { GET_POST_DETAILS, GET_POST_DETAILS_ERROR } from "../constants";

interface GetPostDetailsProps {
  id: number;
  onSuccess?: () => void;
  onError?: () => void;
}

const setError = (err: any) => {
  return {
    type: GET_POST_DETAILS_ERROR,
    payload: err,
  };
};

export default (props: GetPostDetailsProps) => {
  return async (dispatch: any) =>
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_POST_DETAILS,
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
