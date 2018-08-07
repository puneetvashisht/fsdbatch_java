//Jasmine

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });

    it("2 * 3 should result into 6", function(){
        var result = multiply(5,6)
        expect(result).toBe(30);
    })
});