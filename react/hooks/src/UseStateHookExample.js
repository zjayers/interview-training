import { useState } from "react";

export const UseStateHookExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <hr />
      <h4>Use State Hook Example</h4>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
    </div>
  );
};
