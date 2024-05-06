import axios from "axios";
import { GET_USERS, GET_USERS_ERROR } from "../constants";

interface GetUsersProps {
  onSuccess?: () => void;
  onError?: () => void;
}

const setError = (err: any) => {
  return {
    type: GET_USERS_ERROR,
    payload: err,
  };
};

export default (props: GetUsersProps) => {
  return async (dispatch: any) =>
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_USERS,
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
