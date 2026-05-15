import MiddleLeft from "./middleleft";
import MiddleRight from "./middleRight";

const Middle = ({data}) => {
  return (
    <div className="flex h-full max-h-9/10 w-full justify-between bg-white">
        <MiddleLeft/>
        <MiddleRight data={data}/>
    </div>
  );
};

export default Middle;