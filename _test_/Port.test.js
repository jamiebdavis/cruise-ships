const Port = require("../src/Port");

describe("Port", () => {
    it("Checks to see port can be instanced", () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it("it has name property", () => {
        expect(new Port()).toHaveProperty("name")

    })
});

