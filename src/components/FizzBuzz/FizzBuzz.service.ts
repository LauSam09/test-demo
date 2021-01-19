export function fizzOrBuzz(number: number): string | number {
  if (number % 15 === 0) {
    return `${number} - FizzBuzz!`;
  } else if (number % 3 === 0) {
    return `${number} - Fizz!`;
  } else if (number % 5 === 0) {
    return `${number} - Buzz!`;
  } else {
    return number;
  }
}
