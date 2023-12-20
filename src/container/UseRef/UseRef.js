// import React, { useEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";

// function UseRef(props) {
//   const [value, setValue] = useState("");
//   const refNum = useRef(0);
//   const prevRef = useRef();

//   useEffect(() => {
//     refNum.current = refNum.current + 1;

//     prevRef.current = value;
//   });

//   const onFocus = () => {
//     console.log("kkkkk");
//   };
//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <input
//         type="text"
//         name="name"
//         onFocus={onFocus}
//         onChange={e => setValue(e.target.value)}
//       />
//       Your Component Render is: {refNum.current}
//       <br></br>
//       <br></br>
//       <br></br>

//       Your Previous Value is : {prevRef.current}
//     </div>
//   );
// }

// export default UseRef;

// import React, { useMemo, useState } from "react";

// function UseRef(props) {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState("");

// //   With Usememo:-


// const handleResult = () =>{
//     console.log("kkkkk");
//     let fact = 1;

//     for(let i=1;i<=value ;i++){
//         fact = fact * i;
//     }

//     return fact;

// }

// // With the Help Of Usememo;
// const result = useMemo(() =>{
//     return handleResult();
//   },[value])

// // without UseMemo
// //   const result = handleResult();
//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <button onClick={() => setCount(count + 1)}>+</button>
//       {count}

//       <input type="text" onChange={e => setValue(parseInt(e.target.value))} />
//       Factorial Value is : {result}
//     </div>
//   );
// }

// export default UseRef;

import React, { useCallback, useState } from 'react';
import Memolist from './Memolist';

function UseRef(props) {

  const [theme ,setTheme] = useState(false);
  const [value , setValue] = useState(0);

  const   setColor = {
    backgroundColor : theme ? 'black' : 'white',
    color : theme ? 'white' : 'black'
  }

  // With the Help Of Use
  // const setFunction = () =>{
  //   console.log("Child Component is");
  //   return [value , value +1 , value +2]
  // }

  const setFunction = useCallback((num) =>{
    return [value + num , value + num + 1 , value + num + 2 ]
  }, [value])
  return (
    <div style={setColor}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <input type='text' onChange={(e) => setValue(parseInt(e.target.value))}/>
      <br></br>
      <br></br>
      <br></br>

      <Memolist passFunction = {setFunction} />
      
    </div>
  );
}

export default UseRef;
