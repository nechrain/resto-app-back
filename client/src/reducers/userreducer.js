import { GETUSSER, POSTUSER } from "../actions/type";

const init = [];

const userreducer = (state = init, action) => {
  if (action.type == GETUSSER) return [action.payload];
  if (action.type == POSTUSER) return [...state, action.payload];
  else return state;
};

export default userreducer;
