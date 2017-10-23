describe("playing FizzBuzz", function() {
  var fizzes = []
  for (i=1 ; i <= 100 ; i++) {
    if ((i % 3) === 0 && (i % 5) !== 0) {
      fizzes.push(i)
    }
  }
  var buzzes = []
  for (i=1 ; i <= 100 ; i++) {
    if ((i % 5) === 0 && (i % 3) !== 0) {
      buzzes.push(i)
    }
  }
  var fizzbuzzes = []
  for (i=1 ; i <= 100 ; i++) {
    if ((i % 5) === 0 && (i % 3) === 0) {
      fizzbuzzes.push(i)
    }
  }
  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });
  fizzes.forEach(function(num) {
    it('"Fizz" when a number, ' + num + ', is divisible by 3', function() {
      expect(fizzbuzz.says(num)).toEqual("Fizz");
    });
  })

  buzzes.forEach(function(num) {
    it('"Buzz" when a number, ' + num + ', is divisible by 5', function() {
      expect(fizzbuzz.says(num)).toEqual("Buzz");
    });
  })

  fizzbuzzes.forEach(function(num) {
    it('"FizzBuzz" when a number, ' + num + ', is divisible by 15', function() {
      expect(fizzbuzz.says(num)).toEqual("Fizzbuzz");
    });
  })

  // it('divisible by 3', function() {
  //   expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
  // });
  //
  // it('divisible by 5', function() {
  //   expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
  // });
  //
  // it('divisible by 15', function() {
  //   expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
  // });

  // it('"Fizz" when a number is divisible by 3', function() {
  //   expect(fizzbuzz.says(3)).toEqual("Fizz");
  // });
  // 
  // it('"Buzz" when a number is divisible by 5', function() {
  //   expect(fizzbuzz.says(5)).toEqual("Buzz");
  // });
  //
  // it('"Fizzbuzz" when a number is divisible by 15', function() {
  //   expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
  // });
  //

});
