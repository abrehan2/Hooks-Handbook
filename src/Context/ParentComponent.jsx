// IMPORTS -
import { createContext } from "react";
import ComponentA from "./ComponentA"; // Child Component - A

const firstName = createContext(); // Create context

const ParentComponent = () => {
  return (
    <firstName.Provider value={"Abdul Rehan"}>
      <ComponentA />
    </firstName.Provider>
  );
};

export default ParentComponent;
export { firstName };
