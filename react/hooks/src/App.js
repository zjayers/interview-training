import { UseEffectHookExample } from "./UseEffectHookExample";
import { UseLayoutEffectHookExample } from "./UseLayoutEffectHookExample";
import { UseStateHookExample } from "./UseStateHookExample";
import { GroceriesContextProvider } from "./GroceriesContextProvider";
import { UseContextHookExample } from "./UseContextHookExample";

// Context Setup
function App() {
  return (
    <div>
      <GroceriesContextProvider>
        <UseStateHookExample />
        <UseEffectHookExample />
        <UseLayoutEffectHookExample />
        <UseContextHookExample />
      </GroceriesContextProvider>
    </div>
  );
}

export default App;
