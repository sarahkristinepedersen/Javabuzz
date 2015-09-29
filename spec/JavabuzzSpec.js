describe('Javabuzz', function() {

  var javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();

  });

  describe('know when a number is', function() {
    it('divisible by three', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is not', function() {
    it('divisible by three', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('know when a number is', function() {
    it('divisible by five', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('knows when a number is not', function() {
    it('divisible by five', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('know when a number is', function() {
    it('divisible by fifteen', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is not', function() {
    it('divisible by fifteen', function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

});
