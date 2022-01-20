//reducer takes 2 param i.e state and action

import { ADD_COUNTER, REDUCE_COUNTER } from "./actionType";

const initState = {
  counter: 1
};
const reducer = (state = initState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + payload
      };

    case REDUCE_COUNTER:
      return {
        ...state,
        counter: state.counter - payload
      };

    default:
      return state;
  }
};

export { reducer };
