import store from "./customStore";
import * as actions from "./actions";

//store.state = 1;
//console.log(store, store.getState());

store.subscribe(() => console.log("Store changed!"));

store.dispatch(actions.bugAdded("Bug1"));
console.log(store.getState());
