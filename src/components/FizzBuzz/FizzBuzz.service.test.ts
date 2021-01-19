import { fizzOrBuzz } from "./FizzBuzz.service";

describe("FizzBuzz.service", () => {
  describe("fizzOrBuz", () => {
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
  });
});
