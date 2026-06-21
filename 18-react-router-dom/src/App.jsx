import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from 'react-router-dom';

const App=()=>{
  return(
    <div>
     
      <BrowserRouter>
       <Navbar/>
      <AppRoutes/>
    </BrowserRouter>

    </div>
  )
}

export default App;