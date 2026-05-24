import { Outlet } from "react-router-dom";

const Courses=()=>{
    return(
        <div className=" bg-gray-900  text-white ">
           {/* <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold">Courses Page</h1> */}

           <Outlet/>
        </div>
    )
}

export default Courses; 