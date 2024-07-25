import { useCallback, useState, memo } from "react";
import PropTypes from "prop-types";

const Multiplier = ({ handleClick }) => {
  console.log("Re-rendered");
  return <button onClick={handleClick}>Multiply!</button>;
};

const CachedMultiplier = memo(Multiplier);

Multiplier.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export const UseCallbackHookExample = () => {
  const [count, setCount] = useState(1);

  const handleMultiply = useCallback(() => {
    setCount((currentCount) => currentCount * 125);
  }, []);

  return (
    <div>
      <hr />
      <h4>Use Callback Hook Example</h4>
      <p>{count}</p>
      <CachedMultiplier handleClick={handleMultiply} />
    </div>
  );
};
