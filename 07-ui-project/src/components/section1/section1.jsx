import Header from "./header";
import Middle from "./middle";

const Section1 = ({data}) => {

    console.log("Section1",data)
  return (
    <div className=" h-screen ">
      <Header/>
      <Middle data={data}/>
    </div>
  );
};

export default Section1;