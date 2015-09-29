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

  describe('when playing says', function() {
    it ('"Java" when a number is divisible by three', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });
  });

  describe('when playing says', function() {
    it ('"Buzz" when a number is divisible by five', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });
  });

  describe('when playing says', function() {
    it ('"Javabuzz" when a number is divisible by fifteen', function() {
      expect(javabuzz.says(15)).toEqual("Javabuzz");
    });
  });

  describe('when playing says', function() {
    it ('when a number is not divisible by any', function() {
      expect(javabuzz.says(1)).toEqual(1);
    });
  });

});
