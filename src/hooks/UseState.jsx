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
  //   const initialState = [
  //     {
  //       name: "Abdul Rehan",
  //       work: "Full-Stack Engineer",
  //     },
  //   ];
  //   const [value, setValue] = useState(initialState);
  //   return (
  //     <>
  //       <div className="__main__">
  //         {value &&
  //           value.map((val, index) => {
  //             return (
  //               <ul className="__list__" key={index}>
  //                 <li>Name: {val.name}</li>
  //                 <li>Work: {val.work}</li>
  //               </ul>
  //             );
  //           })}
  //       </div>
  //     </>
  //   );
  // EXAMPLE 3: Capture and display form input with useState()

  const [value, setValue] = useState({
    name: "",
    age: "",
  });

  const [result, setResult] = useState(null);

  const getInput = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const getResult = (e) => {
    e.preventDefault();
    setResult(value);
  };

  return (
    <>
      <div className="__form__main__">
        <form onSubmit={getResult}>
          <input
            type="text"
            placeholder="Name"
            className="__input__"
            required
            name="name"
            onChange={getInput}
          />
          <input
            type="number"
            placeholder="Age"
            className="__input__"
            required
            name="age"
            onChange={getInput}
          />

          <div className="__btn__">
            <button type="submit">Submit</button>
          </div>
        </form>

        {result && (
          <div className="__result__">
            <p>Name: {result?.name}</p>
            <p>Age: {result?.age}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default UseState;
