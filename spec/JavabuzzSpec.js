describe('Javabuzz', function() {

  var javabuzz;

  describe('know when a number is', function() {
    it('divisible by three', function() {
      javabuzz = new Javabuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });
  });
});



































































// describe('Javabuzz', function() {

//   var javabuzz;

//   describe('knows when a number is', function() {
//     it('divisible by 3', function() {
//       javabuzz = new Javabuzz();
//       expect(javabuzz.isDivisibleByThree(3)).toBe(true);
//     });
//   });

//   describe('knows when a number is NOT', function() {
//     it('divisible by 3', function() {
//       javabuzz = new Javabuzz();
//       expect(javabuzz.isDivisibleByThree(1)).toBe(false);
//     });
//   });

//   describe('when playing, says', function() {
//     it('"Java" when a number is divisible by 3', function() {
//       expect(javabuzz.says(3)).toEqual("Java");
//     });
//   });

// });