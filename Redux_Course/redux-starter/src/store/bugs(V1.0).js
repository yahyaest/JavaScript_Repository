import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
  },
});

console.log(slice);

export const {
  bugAdded,
  bugResolved,
  bugRemoved,
  bugAssignedToUser,
} = slice.actions;
export default slice.reducer;

//Selector function
export const getUnresolvedBugs_0 = (state) =>
  state.entities.bugs.filter((bug) => !bug.resolved);

// Memorization
//bugs => get unresolved bugs from cache
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs, //Selector
  (bugs) => bugs.filter((bug) => !bug.resolved) //Result function
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs, //Selector

    (bugs) => bugs.filter((bug) => bug.userId === userId) //Result function
  );
