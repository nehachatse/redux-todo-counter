import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { store } from "./Part1/Redux/store";
// import { AppContextProvider } from "./Part1/Redux/AppContextProvider";
import { AppContextProvider } from "./Part2/Redux/AppContextProvider";
import { store } from "./Part2/Redux/store";

console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppContextProvider store={store}>
      <App />
    </AppContextProvider>
  </StrictMode>,
  rootElement
);
