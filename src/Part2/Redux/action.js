import {
  ADD_TODO,
  TOGGLE_TODO,
  ADD_COUNTER,
  REDUCE_COUNTER
} from "./actionType";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: {
    title: payload,
    status: false
  }
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload
});

export const addCounter = (payload) => {
  return {
    type: ADD_COUNTER,
    payload
  };
};

export const reduceCounter = (payload) => {
  return {
    type: REDUCE_COUNTER,
    payload
  };
};
