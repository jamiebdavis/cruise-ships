const Ship = require("../src/Ship");

describe("Ship", () => {
  it("ship can be instanced", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    const ship = new Ship("Dover");

    expect(ship.startingPort).toBe("Dover");
  });
});
