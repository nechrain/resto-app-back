const stateInit = [];

export default function clientReducer(state = stateInit, action) {
  if (action.type === "GET_MENUClient") {
    return action.payload;
  }
  return state;
}
