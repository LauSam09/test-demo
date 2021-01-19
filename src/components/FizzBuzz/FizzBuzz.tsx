import React, { useState } from "react";

import { fizzOrBuzz } from "./FizzBuzz.service";

export default function FizzBuzz() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <span>{fizzOrBuzz(number)}</span>
      <button onClick={() => setNumber((n) => n + 1)}>Click me</button>
    </>
  );
}
