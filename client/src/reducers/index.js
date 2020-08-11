import { combineReducers } from "redux";
import adminReducer from "./adminreducer";
import clientReducer from "./clientreducer";
import userreducer from "./userreducer";

const allReducers = combineReducers({
  menu: adminReducer,
  meal: clientReducer,
  user: userreducer,
});

export default allReducers;
