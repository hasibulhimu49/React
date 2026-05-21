import axios from 'axios';
import { useState } from 'react';

const App=()=>{

  const [data, setData] = useState([])

// using fetch
//  const getData=async ()=>{
//   const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data=await response.json();
//   console.log(data);

// }



// using axios
 const getData=async ()=>{
  const response =await axios.get('https://jsonplaceholder.typicode.com/todos')
  const data=response.data;
  console.log(data);
  setData(data);
}
  return( 
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elm,idx)=>{
          return <h1 key={idx}>{elm.id}  {elm.title} </h1>
        })}
      </div>
    </div>
  )
}

export default App;