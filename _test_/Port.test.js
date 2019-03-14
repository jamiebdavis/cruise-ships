const Port = require("../src/Port");

describe("Port", () => {
  it("Port can be instanced", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("Port has a name", () => {
    const port = new Port("Dover");

    expect(port.name).toBe("Dover");
  });
});
