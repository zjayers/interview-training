import { useMemo, useState } from "react";

const expensiveCalculation = () => {
  return (Math.random() + Math.random() * 10) / Math.random();
};

export const UseMemoHookExample = () => {
  const [count, setCount] = useState(0);
  const memoizedValue = useMemo(() => expensiveCalculation(), []);

  return (
    <div>
      <hr />
      <h4>Use State Hook Example</h4>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount((count + 1) * memoizedValue)}>
        Increment Count: {count}
      </button>
    </div>
  );
};
