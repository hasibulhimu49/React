import axios from "axios";
import { useState } from "react";

const App=()=>{

  const [userdata, setuserData] = useState([])

 async function getData(){
     axios.get('https://picsum.photos/v2/list?page=2&limit=100');
  }
  return(
    <button onClick={()=>{
      getData
    }}></button>
  )
}

export default App;