const Intinerary = require("../src/Itinerary");

describe("Itinerary", () => {
  it("Can be instanced", () => {
    expect(new Intinerary()).toBeInstanceOf(Object);
  });
  it("can have ports", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    const intinerary = new Intinerary([dover, calais]);

    expect(intinerary.ports).toEqual([dover, calais]);
  });
});
