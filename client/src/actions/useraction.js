import { GETUSSER, POSTUSER } from "./type";
import axios from "axios";


export const getalluser = () => {
  return (dispatch) =>
    axios
      .get("http://localhost:8000/users")
      .then((res) => dispatch(usergetall(res.data)))

      .catch((error) => console.log(error));
};

const usergetall = (payload) => ({
  type: GETUSSER,
  payload,
});
export const postuser = (obj) => {
  console.log(obj);
  return (dispatch) =>
    axios
      .post("http://localhost:8000/users", obj)
      .then((res) => dispatch(userpost(obj)))
      .catch((err) => console.log(err));
};
const userpost = (payload) => ({
  type: POSTUSER,
  payload,
});
