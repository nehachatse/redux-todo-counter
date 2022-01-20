import {
  ADD_TODO,
  TOGGLE_TODO,
  ADD_COUNTER,
  REDUCE_COUNTER
} from "./actionType";

const initState = {
  todo: [],
  counter: 1
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.title === payload ? { ...item, status: !item.status } : item
        )
      };

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
