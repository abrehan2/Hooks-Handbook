// IMPORTS -
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Hi, I am running!");
  }, [value]);

  return (
    <div className="__btn__wrapper">
      <button type="submit" onClick={() => setValue((prev) => prev + 1)}>
        Count: {value}
      </button>
    </div>
  );
};

export default UseEffect;
