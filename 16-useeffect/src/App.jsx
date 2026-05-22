import { useEffect, useState } from "react";

const App = () => {
  // const [first, setFirst] = useState(0)
  // const [second, setSecond] = useState(0)

  // useEffect(function (){
  //   console.log("useeffect is running......")
  // },[first])

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aCghanging() {
    console.log("A Changing.........");
  }
  function aCghanging() {
    console.log("A Changing.........");
  }



  useEffect(function(){
    console.log("useEffect is running..........")
  },[a])

  return (
    // <div>
    //   <h1>num is {first} </h1>
    //    <h1>num is {second} </h1>
    //   <button onMouseEnter={
    //    ()=>{
    //      setFirst(first+1)
    //    }
    //   }
    //   onMouseLeave={
    //     ()=>{
    //       setSecond(second-1)
    //     }
    //   }>Hover</button>
    // </div>

    <div>
      <h1> A is {a}</h1>
      <h1> B is {b}</h1>
      <button onClick={()=>{setA(a+1)}}>Button A</button>
      <button onClick={()=>{setB(b-1)}}>Button B</button>
    </div>
  );
};

export default App;
