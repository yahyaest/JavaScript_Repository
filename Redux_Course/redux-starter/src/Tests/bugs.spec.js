import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { addBug, bugAdded } from "../store/bugs";
import { apiCallBegan } from "./../store/api";
import configureStore from "../store/configureStore";

// Solitary Test
describe("bugsSlice", () => {
  describe("action creators", () => {
    it("addBug", () => {
      const bug = { description: "a" };
      const result = addBug(bug);
      const expected = {
        type: apiCallBegan.type,
        payload: {
          url: "/bugs",
          method: "post",
          data: bug,
          onSuccess: bugAdded.type,
        },
      };
      expect(result).toEqual(expected);
    });
  });
});

// Social Test
describe("bugsSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const bugsSlice = () => store.getState().entities.bugs;

  it("should add the bug to the store if it's saved to the server", async () => {
    //// Arrange
    const bug = { description: "b" };
    const saveBug = { ...bug, id: 1 };
    fakeAxios.onPost("/bugs").reply(200, saveBug);

    //// Act
    await store.dispatch(addBug(bug));
    console.log(bugsSlice().list);

    //// Assert
    //expect(store.getState().entities.bugs.list).toHaveLength(1); used with database
    expect(bugsSlice().list).toContainEqual(saveBug);
  });

  it("should not add the bug to the store if it's not saved to the server", async () => {
    //// Arrange
    const bug = { description: "b" };
    fakeAxios.onPost("/bugs").reply(500);

    //// Act
    await store.dispatch(addBug(bug));

    //// Assert
    expect(bugsSlice().list).toHaveLength(0);
  });
});
