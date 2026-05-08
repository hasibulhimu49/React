import Card from './components/Card.jsx' 
import Navbar from './components/Navbar.jsx' 

const App=()=>{
  return(
    <div>
      <div className="card">
         <h1>Mohammad Hasibul Hasan</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi?</p>
      </div>

      <Navbar />
      <Navbar />
      <Card />
    </div>
  );
};

export default App;