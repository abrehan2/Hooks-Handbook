// IMPORTS -
import { useState } from "react";

const UseState = () => {
  // EXAMPLE 1: Use useState() to initialize and update data on user action
  const [value, setValue] = useState("Rehan is a Software Engineer");

  return (
    <>
      <div className="__main__">
        Current Data: {value}
        <div className="__sub__main__">
          <button
            onClick={() =>
              setValue("Who is learning and striving for excellence!")
            }
          >
            Update message
          </button>
        </div>
      </div>
    </>
  );
};

export default UseState;
