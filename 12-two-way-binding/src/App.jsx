import { useState } from "react";

const App=()=>{


// const [title, settitle] = useState('')
//   function formHandler(e){
//     e.preventDefault();
//     console.log(" From Submitted by ",title);
//     settitle('');
//   }


//practice again
const [name, setName] = useState('');
function formHandle(e){
  e.preventDefault();
  console.log("From Suumitted by:", name );
  setName('')
}



  return(
    // <div >
    //   <form onSubmit={(e)=>{
    //     formHandler(e);
    //   }}>
    //     <input type="text" placeholder="Enter your name" value={title} onChange={(elem)=>{
    //       settitle(elem.target.value);
    //     }}/>
    //     <button>Submit</button>
    //   </form>
    // </div>



    //Again Practice
    <div>
      <form onSubmit={(e)=>{
        formHandle(e);
      }}>
        <input type="text" placeholder="Enter your name" value={name} onChange={(elem)=>{
          setName(elem.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;