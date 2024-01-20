// // IMPORTS -
// import { useEffect, useState } from "react";

// EFFECT USECASES -
// const UseEffect = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("Hi, I am running!");
//   }, [value]);

//   return (
//     <div className="__btn__wrapper">
//       <button type="submit" onClick={() => setValue((prev) => prev + 1)}>
//         Count: {value}
//       </button>
//     </div>
//   );
// };

// CLEAN UP FUNCTION EXAMPLE -
// const createConnection = () => {
//   return {
//     connect() {
//       console.log("Connected ✅");
//     },

//     disconnect() {
//       console.log("Disconnected ❌");
//     },
//   };
// };

// const UseEffect = () => {
//   const [value, setValue] = useState("You are not in the chatroom!");

//   useEffect(() => {
//     const connection = createConnection();
//     connection.connect();
//     setValue("You are in the chatroom!");

//     return () => connection.disconnect();
//   }, []);

//   return <h1>{value}</h1>;
// };

// export default UseEffect;

