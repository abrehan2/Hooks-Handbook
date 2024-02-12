// IMPORTS -
import { useContext } from "react";
import { firstName } from "./ParentComponent"; // Received context

const ComponentB = () => {
  const context = useContext(firstName);

  return (
    <>
      {/* <firstName.Consumer>
        {(fName) => {
          return <h1> My name is {fName}</h1>;
        }}
      </firstName.Consumer> */}

      <h1> My name is {context}</h1>
    </>
  );
};

export default ComponentB;
