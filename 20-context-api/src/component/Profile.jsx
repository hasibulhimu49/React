import { useContext } from "react";
import { UserContext} from "../context/UserContext";

const Profile=()=>{

  // console.log(props.user)
  
   let user= useContext(UserContext);
   console.log("here context api",user)


  return(
    <div >
        {/* <h1 className="font-semibold text-6xl"> The Logged in User name is {props.user}</h1> */}

         <h1 className="font-semibold text-6xl"> The Logged in User name is {user}</h1>
    </div>
  )
}


export default Profile;