import { UseEffectHookExample } from "./UseEffectHookExample";
import { UseLayoutEffectHookExample } from "./UseLayoutEffectHookExample";
import { UseStateHookExample } from "./UseStateHookExample";
import { GroceriesContextProvider } from "./GroceriesContextProvider";
import { UseContextHookExample } from "./UseContextHookExample";
import { UseReducerHookExample } from "./UseReducerHookExample";
import { UseRefHookExample } from "./UseRefHookExample";
import { UseMemoHookExample } from "./UseMemoHookExample";
import { UseCallbackHookExample } from "./UseCallbackHookExample";
import { UseTransitionHookExample } from "./UseTransitionHookExample";

// Context Setup
function App() {
  return (
    <div>
      <GroceriesContextProvider>
        <UseStateHookExample />
        <UseReducerHookExample />
        <UseMemoHookExample />
        <UseEffectHookExample />
        <UseLayoutEffectHookExample />
        <UseRefHookExample />
        <UseCallbackHookExample />
        <UseContextHookExample />
        <UseTransitionHookExample />
      </GroceriesContextProvider>
    </div>
  );
}

export default App;
