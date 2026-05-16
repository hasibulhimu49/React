const App=()=>{


  function formHandler(e){
    e.preventDefault();
    console.log("Submitted");
  }

  return(
    <div >
      <form onSubmit={(e)=>{
        formHandler(e);
      }}>
        <input type="text" placeholder="Enter your name"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;