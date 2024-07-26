import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          onClick={increment}
          aria-label="increment count"
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          onClick={decrement}
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
