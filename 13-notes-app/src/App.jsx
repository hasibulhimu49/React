import { useState } from "react";

const App = () => {


 function submitHandler(e) {
  e.preventDefault();
  console.log("Submitted....")
    
  }

  const [Tittle, setTittle] = useState("");

  return (

    <div className="flex">

      <div className="h-screen w-1/2">
        <form onSubmit={(e)=>{submitHandler(e); }} 
         className=" flex flex-col gap-6  p-10 items-start">
        <h1 className="text-2xl font-bold py-2">Add Your Notes</h1>

        <input type="text"
         placeholder="Enter your notes"
         className="border-2 rounded h-15 px-5 w-1/2">
         </input>

        <textarea placeholder="Write details"
        className="border-2 rounded h-35 px-5  w-1/2">
        </textarea>

        <button className="bg-black text-white px-5 py-2 rounded  w-1/2"> Add Note</button>

         </form>
      </div>

      <div className="border-2"></div>

  <div className="flex flex-wrap px-5 py-5 p-10 w-1/2 gap-4  h-full overflow-auto">
     <h1 className="text-2xl font-bold py-2 w-full">Current Notes</h1>

     <div className="h-52 w-40 rounded-2xl bg-amber-400"></div>

     

  </div>
    </div>
     );
};

export default App;