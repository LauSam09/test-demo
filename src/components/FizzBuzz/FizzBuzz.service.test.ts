import { fizzOrBuzz } from "./FizzBuzz.service";

describe("FizzBuzz.service", () => {
  describe("fizzOrBuzz", () => {
    test("should handle negative numbers", () => {
      // Act
      const result = fizzOrBuzz(-13);

      // Assert
      expect(result).toEqual(-13);
    });

    test("should handle NaN", () => {
      // Act
      const result = fizzOrBuzz(NaN);

      // Assert
      expect(result).toEqual(NaN);
    });

    test.each([1, 7, 41, 124])(
      "Non-divisible value %p should be returned",
      (value) => {
        // Act
        const result = fizzOrBuzz(value);

        // Assert
        expect(result).toEqual(value);
        expect(typeof result).toEqual("number");
      }
    );

    test.each([3, 27, 123])(
      "Value (%p) divisible by 3 should return 'Fizz'",
      (value) => {
        // Act
        const result = fizzOrBuzz(value);

        // Assert
        expect(result).toEqual(`${value} - Fizz!`);
      }
    );

    test.each([5, 25, 130])(
      "Value (%p) divisible by 5 should return 'Buzz'",
      (value) => {
        // Act
        const result = fizzOrBuzz(value);

        // Assert
        expect(result).toEqual(`${value} - Buzz!`);
      }
    );

    test.each([0, 15, 120])(
      "Value (%p) divisible by 3 and 5 should return 'FizzBuzz'",
      (value) => {
        // Act
        const result = fizzOrBuzz(value);

        // Assert
        expect(result).toEqual(`${value} - FizzBuzz!`);
      }
    );
  });
});
