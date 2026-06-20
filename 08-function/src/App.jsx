import { useState } from "react";

const App = () => {
  const [text, settext] = useState("");

  return (
    //   <div>
    //     <button onClick={()=>{
    //       console.log("Clicked")
    //     }}>Click me</button>

    //  <input type="text" placeholder="Enter your name" onChange={(elm)=>{
    //       console.log(elm.target.value)
    //     }} />

    //   <div className="box1" onMouseEnter={()=>{
    //     console.log("Entered Mouse")
    //   }}></div>

    //       <div  className="box2" onMouseMove={()=>{
    //     console.log("Moving Mouse")
    //   }}></div>

    //   </div>

    //Again practice

    <div>
      <button onClick={() => settext("Clicked")}>Click me</button>

      <input
        type="text"
        placeholder="enter your text"
        onChange={(e) => console.log(e.target.value)}
      />

      <div
        className="box1"
        onMouseEnter={() => console.log("Enter mouse")}
      ></div>

      <div
        className="box2"
        onMouseLeave={() => console.log("Mouse Leave")}
      >{text}</div>
    </div>
  );
};

export default App;
