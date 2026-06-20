import { useState } from "react";

const App=()=>{

  // This is not working because react will not update ui untill use state
  // let num=20;

  // function changeNumber(){

  //   num=30;
  //   console.log(num);
  // }


  // const [num, setnum] = useState(20);
  //   function changeNumber(){
  //   console.log(num);
  //   setnum(30);
  //   console.log(num);
  // }



  // Counter App
  // const [num, setnum] = useState(0);


  //   function increaseNumber(){
  //     setnum(num+1);

  // }

  //    function decreaseNumber(){
  //     setnum(num-1);

  // }

  //    function increaseMany(){
  //     setnum(num+5);

  // }



  //Practice again

  const [num, setnum] = useState(0);

  function increase(){
    setnum(num+1);
  }

    function decrease(){
    setnum(num-1);
  }

    function manyincrease(){
    setnum(num+10);
  }

  return(
    // <div>
    //    <h1>{num}</h1>

    //    <div className="btn">
    //     <button onClick={increaseNumber}>Increase</button>
    //    <button onClick={decreaseNumber}>Decrese</button>
    //    <button onClick={increaseMany}>Increase 5</button>
    //    </div>
    // </div>



    //practice again 
      <div>
       <h1>{num}</h1>

       <div className="btn">
        <button onClick={increase}>Increase</button>
       <button onClick={decrease}>Decrese</button>
       <button onDoubleClick={manyincrease}>Increase 10</button>
       </div>
    </div>

    


  )
}

export default App;