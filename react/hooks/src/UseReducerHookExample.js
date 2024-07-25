import { useReducer } from "react";

const actions = {
  increment: "increment",
  decrement: "decrement",
};

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action) {
    case actions.increment:
      return {
        count: state.count + 1,
      };
    case actions.decrement:
      return {
        count: state.count - 1,
      };
    default:
      throw new Error("Action not defined!");
  }
};

export const UseReducerHookExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <hr />
      <h4>Use Reducer Hook Example</h4>
      <button onClick={() => dispatch(actions.increment)}>
        Increment Count: {state.count}
      </button>
      <button onClick={() => dispatch(actions.decrement)}>
        Decrement Count: {state.count}
      </button>
    </div>
  );
};
