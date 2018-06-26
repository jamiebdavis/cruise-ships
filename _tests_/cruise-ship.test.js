const Ship = require("../src/cruise-ship");

describe("constructor", () => {
    it("Tests instance of object can be created", () => {
        expect(new Ship("shipOne")).toBeInstanceOf(Object);
    });

});

