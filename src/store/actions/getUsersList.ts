import axios from "axios";
import { GET_USERS_LIST, GET_USERS_LIST_ERROR } from "../constants";

interface GetUsersListProps {
  onSuccess?: () => void;
  onError?: () => void;
}

const setError = (err: any) => {
  return {
    type: GET_USERS_LIST_ERROR,
    payload: err,
  };
};

export default (props: GetUsersListProps) => {
  return async (dispatch: any) =>
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_USERS_LIST,
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
