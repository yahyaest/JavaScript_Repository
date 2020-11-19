import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugRemoved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
  loadBugs,
  addBug,
  assignBugToUser,
  resolveBug,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
// import * as actions from "./store/api";

const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});
console.log(store, store.getState());

//Actions
console.log("***Actions***");

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(projectAdded({ name: "Project 1" }));
unsubscribe();
store.dispatch(bugAdded({ id: 1, description: "Bug 1" }));
store.dispatch(bugAdded({ id: 2, description: "Bug 2" }));
store.dispatch(bugAdded({ id: 3, description: "Bug 3" }));

store.dispatch(bugAssignedToUser({ id: 3, userId: 1 }));
store.dispatch(bugAssignedToUser({ id: 1, userId: 1 }));

store.dispatch(bugResolved({ id: 3 }));

store.dispatch(bugRemoved({ id: 2 }));

//MiddleWare
console.log("***MiddleWare***");

store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugReceived", bugs: [1, 3, 2] });
  console.log("middleware", getState());
});
store.dispatch({ type: "error", payload: { message: "An error occurred." } });

// Selectors
console.log("***Selectors***");
const unresolvedBugs = getUnresolvedBugs(store.getState());
const bugsByUser = getBugsByUser(1)(store.getState());

console.log(unresolvedBugs);
console.log(bugsByUser);

// ApiCalls
console.log("***ApiCalls***");
// store.dispatch({
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     //method: "get",
//     //data: {},
//     onSuccess: "bugsReceived",
//     onError: "apiRequestFailed",
//   },
//   });

// store.dispatch(
//   actions.apiCallBegan({
//     url: "/bugs",
//     onSuccess: "bugs/bugsReceived",
//   })
// );

// UI Layer
store.dispatch(addBug({ description: "a" }));
store.dispatch(loadBugs());
// setTimeout(() => store.dispatch(loadBugs()), 2000); // Checkcaching is working
setTimeout(() => store.dispatch(assignBugToUser(1, 3)), 2000);
setTimeout(() => store.dispatch(resolveBug(3)), 4000);
