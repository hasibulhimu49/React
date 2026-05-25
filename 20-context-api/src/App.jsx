import Home from './component/Home'
import { UserContext } from './context/UserContext';

const App=()=>{

let user="Mohammad Hasibul Hasan";

  return(
    <div>
      {/* Props drilling */}
      {/* <Home user={user} /> */}

      {/* Context API */}
      <UserContext.Provider value={user}>
        <Home/>
      </UserContext.Provider>
    </div>
  )
}


export default App;