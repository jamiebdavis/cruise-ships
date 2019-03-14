const Ship = require("../src/Ship");
const Port = require("../src/Port");

describe("Ship", () => {
  it("ship can be instanced", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);

    expect(ship.currentPort).toBe(port);
  });
  it("Can set Sail", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });
  it("can dock in different ports", () => {
    const dover = new Port("Dover");
    const ship = new Ship(dover);

    const calais = new Port("Calais");

    expect(ship.dock(calais)).toBe(calais);
  });
});
