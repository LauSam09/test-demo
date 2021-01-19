import React from "react";
import { fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";

import FizzBuzz from "./FizzBuzz";
import { fizzOrBuzz } from "./FizzBuzz.service";

jest.mock("./FizzBuzz.service");

describe("<FizzBuzz />", () => {
  test("should match snapshot", () => {
    // Act
    const tree = renderer.create(<FizzBuzz />);

    // Assert
    expect(tree).toMatchSnapshot();
  });

  test("should increment number when button is clicked", () => {
    // Arrange
    (fizzOrBuzz as jest.Mock).mockImplementation((number: number) => number);
    const { getByText, queryByText } = render(<FizzBuzz />);
    const button = getByText("Click me");

    // Assert
    expect(queryByText(0)).toBeInTheDocument();

    // Act
    fireEvent.click(button);

    // Assert
    expect(queryByText(1)).toBeInTheDocument();
  });
});
