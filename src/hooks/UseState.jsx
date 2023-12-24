// IMPORTS -
import { useState } from "react";

const UseState = () => {
  // EXAMPLE 1: Use useState() to initialize and update data on user action
  //   const [value, setValue] = useState("Rehan is a Software Engineer");
  //   return (
  //     <>
  //       <div className="__main__">
  //         Current Data: {value}
  //         <div className="__sub__main__">
  //           <button
  //             onClick={() =>
  //               setValue("Who is learning and striving for excellence!")
  //             }
  //           >
  //             Update message
  //           </button>
  //         </div>
  //       </div>
  //     </>
  //   );

  // EXAMPLE 2: Render array of objects with useState() and Map function

  const initialState = [
    {
      name: "Abdul Rehan",
      work: "Full-Stack Engineer",
    },
  ];

  const [value, setValue] = useState(initialState);

  return (
    <>
      <div className="__main__">
        {value &&
          value.map((val, index) => {
            return (
              <ul className="__list__" key={index}>
                <li>Name: {val.name}</li>
                <li>Work: {val.work}</li>
              </ul>
            );
          })}
      </div>
    </>
  );
};

export default UseState;
