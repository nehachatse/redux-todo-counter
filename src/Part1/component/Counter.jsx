import { store } from "../Redux/store";
import { addCounter, reduceCounter } from "../../Part2/Redux/action";
import React, { useState } from "react";
import { AppContext } from "../../Part2/Redux/AppContextProvider";

export default function Counter() {
  const { dispatch, getState } = React.useContext(AppContext);
  const { counter } = getState();

  const handleAdd = () => {
    dispatch(addCounter(1));
  };
  const handleReduce = () => {
    dispatch(reduceCounter(1));
  };
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </>
  );
}
