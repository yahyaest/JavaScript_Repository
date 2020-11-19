import { isEven } from "./math";

// Regrouping test
describe("isEven", () => {
  it("should return true if given an even number", () => {
    //Function under test (SUT)
    const result = isEven(10);
    expect(result).toEqual(true);
  });

  it("should return false if given an odd number", () => {
    //System under test (SUT)
    const result = isEven(19);
    expect(result).toEqual(false);
  });
});
