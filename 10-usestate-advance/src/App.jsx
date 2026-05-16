import { useState } from "react";

const App=()=>{


  // const [user, setuser] = useState({name:'hasibul',age:25})

  // function changeUser(){
  //   setuser({name:'Mohamad',age:30});
  //   setuser({...user,age:30});  ---Spread Operator
  //   console.log(user.name);
  //   console.log(user.age);
  // }


  // const [num, setArray] = useState([10,20,30,40])

  // function changeArray(){

  //   console.log(num);
  //   setArray([100,200,300,4000])
  //     console.log(num);
    
  //   }


//Batch Update
  const [num, setArray] = useState(0)

    function changeNumber(){
    console.log(num);
      setArray(num+1)
      setArray(num+1)
      setArray(num+1)
      console.log(num);
    
    }

  return(
    <div>
      {/* <h1>User name is {user.name} and age {user.age}</h1>
      <button onClick={changeUser}>click me</button> */}

     {/* <h1>{num}</h1>
      <button onClick={changeArray}>click me</button> */}


      <h1>{num}</h1>
      <button onClick={changeNumber}>click me</button>
      
    </div>
  )
}

export default App;