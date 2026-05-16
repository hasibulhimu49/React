
const App=()=>{

  return(
    <div>
      <button onClick={()=>{
        console.log("Clicked")
      }}>Click me</button>


   <input type="text" placeholder="Enter your name" onChange={(elm)=>{
        console.log(elm.target.value)
      }} />

    <div className="box1" onMouseEnter={()=>{
      console.log("Entered Mouse")
    }}></div>

        <div  className="box2" onMouseMove={()=>{
      console.log("Moving Mouse")
    }}></div>

    </div>
  )
}

export default App;