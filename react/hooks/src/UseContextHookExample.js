import { useContext, useState } from "react";
import { GroceriesContext } from "./GroceriesContextProvider";

export const UseContextHookExample = () => {
  const [newItem, setNewItem] = useState("");
  const { groceries, addItem } = useContext(GroceriesContext);

  return (
    <div>
      <hr />
      <h4>Use Context Example</h4>
      <label>
        Add New Item
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          addItem(newItem);
          setNewItem("");
        }}>
        Add Item
      </button>
      <p>Items:</p>
      <ul>
        {groceries.length === 0 ? (
          <p>Please add an item...</p>
        ) : (
          groceries.map((element, i) => <li key={element + i}>{element}</li>)
        )}
      </ul>
    </div>
  );
};
