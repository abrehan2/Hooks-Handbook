// IMPORTS -
import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const refContainer = useRef();
  const styleValue = useRef();
  const [value, setValue] = useState("");

  const submitHandler = () => {
    setValue(refContainer.current.value);
  };

  useEffect(() => {
    if (styleValue.current) {
      styleValue.current.style.color = "red";
    }
  }, [value]);

  return (
    <div className="ref__container">
      <input type="text" ref={refContainer} placeholder="Enter your name" />
      {value && <p ref={styleValue}>My name is: {value}</p>}{" "}
      {/* Giving styleValue as a reference */}
      <div className="ref__container__btn">
        <button type="submit" onClick={() => submitHandler()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UseRef;
