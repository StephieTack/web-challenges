import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
    setCount((prevCount) => prevCount + 1);
    console.log(count);
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  }

  // so kann man den console.log korrekt setzen:
  useEffect(() => {
    console.log("Updated count:", count);
  }, [count]);

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
