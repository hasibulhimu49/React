import axios from 'axios';
import { useState } from 'react';

const App=()=>{

// const [data, setData] = useState([])
// using fetch
//  const getData=async ()=>{
//   const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data=await response.json();
//   console.log(data);
// }

//Practice again 
//  const [result, setResult] = useState([])
//   const getData=async ()=>{
//   let response=await fetch('https://jsonplaceholder.typicode.com/todos');
//   let result=await response.json();
//   console.log(result);
//   setResult(result);
// }




// using axios

//  const getData=async ()=>{
//   const response =await axios.get('https://jsonplaceholder.typicode.com/todos')
//   const data=response.data;
//   console.log(data);
//   setData(data);
// }


//practice again
const [result, setResult] = useState([])
const getData=async ()=>{
  let response=await axios.get("https://jsonplaceholder.typicode.com/todos")
  let result=response.data;
  console.log(result);
  setResult(result);
}



  return( 
    // <div>
    //   <button onClick={getData}>Get Data</button>
    //   <div>
    //     {data.map((elm,idx)=>{
    //       return <h1 key={idx}>{elm.id}  {elm.title} </h1>
    //     })}
    //   </div>
    // </div>


    //Practice again 
    <div>
      <button onClick={getData}>GET DATA</button>

      <div>
        {
          result.map((elem,idx)=>{
            console.log("This is elem:",elem)
            return <h2 key={idx}>{elem.id}--------{elem.title}</h2>
          })
        }
      </div>
    </div>
    
  )
}

export default App;