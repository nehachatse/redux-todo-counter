import { ADD_COUNTER, REDUCE_COUNTER } from "./actionType";

// action creator is a function which returns an object
//that defines the action which is an object with key type to define what type of action it is also have keys like payload, etc
const addCounter = (payload) => {
  return {
    type: ADD_COUNTER,
    payload
  };
};

const reduceCounter = (payload) => {
  return {
    type: REDUCE_COUNTER,
    payload
  };
};

export { addCounter, reduceCounter };
