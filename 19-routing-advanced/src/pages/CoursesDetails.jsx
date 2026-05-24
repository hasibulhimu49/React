import { useParams } from "react-router-dom";

const CoursesDetails = () => {

    let params=useParams();


  return (
    <div className=" bg-gray-900  text-white">
      <h1 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold">
        Courses details page -- {params.id}
      </h1>
    </div>
  );
};

export default CoursesDetails;
