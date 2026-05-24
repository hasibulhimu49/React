import { useNavigate } from "react-router-dom"

const About=()=>{


let navigate=useNavigate();

function returnHome(){
    navigate('/');

}


    return(
        <div className=" bg-gray-900  text-white">

            <button onClick={returnHome} className="bg-red-400 h-10 w-50 rounded text-white m-10">Return to Home Page</button>
             <button onClick={()=>{
                navigate(-1);
             }} className="bg-green-700 h-10 w-50 rounded text-white m-10">Back</button>

              <button onClick={()=>{
                navigate(+1);
             }} className="bg-green-700 h-10 w-50 rounded text-white m-10">Next</button>


           <h1 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold">About Page</h1>
        </div>
    )
}

export default About