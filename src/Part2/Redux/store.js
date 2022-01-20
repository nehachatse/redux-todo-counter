import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);

// class Store {
//   constructor(reducer, initState) {
//     this.reducer = reducer;
//     this.state = initState;
//   }

//   getState() {
//     return this.state;
//   }

//   dispatch(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }

// var store = new Store(reducer, initState);

// console.log(store.getState);
