import React from "react";
import { toggleTodo } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";

export default function TodoItems({ task }) {
  const { dispatch, getState } = React.useContext(AppContext);

  const handleToggle = (payload) => {
    dispatch(toggleTodo(payload));
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
      <h3 style={{ marginRight: "1rem" }}>{task.title} </h3>
      <p style={{ marginRight: "1rem" }}>
        (Status:{task.status ? " true" : "false"})
      </p>
      <button onClick={() => handleToggle(task.title)}>Toggle</button>
    </div>
  );
}
