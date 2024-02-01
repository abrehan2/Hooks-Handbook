// IMPORTS -
import { useReducer } from "react";

// REDUCER FUNCTION -
const reducer = (currentState, action) => {
  if (action.type === "INCREMENT") return { count: currentState.count + 1 };

  if (action.type === "DECREMENT" && currentState.count > 0)
    return { count: currentState.count - 1 };

  return currentState;
};

// INITIAL STATE -
const initialState = {
  count: 0,
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>{state?.count}</p>
      <div className="btn__wrapper__reducer">
        <button type="submit" onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>

        <button type="submit" onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseReducer;
