import { useEffect, useState } from "react";

export const UseEffectHookExample = () => {
  const [mockApiOutput, setMockApiOutput] = useState("Loading...");

  useEffect(() => {
    // Mock Loading API Call
    const timeoutId = setTimeout(() => {
      setMockApiOutput({
        name: "Bob",
        phone: "555-555-5555",
        address: "123 Easy Street, New York, New York",
      });
    }, 1000);

    // Cleanup Timer
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <hr />
      <h4>Use Effect Hook Example</h4>
      <pre>{JSON.stringify(mockApiOutput, null, 2, 0)}</pre>
    </div>
  );
};
