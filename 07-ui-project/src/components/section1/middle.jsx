import MiddleLeft from "./middleleft";
import MiddleRight from "./middleRight";

const Middle = () => {
  return (
    <div className="flex h-full max-h-9/10 w-full max-w-96 bg-yellow-400">
        <MiddleLeft/>
        <MiddleRight/>
    </div>
  );
};

export default Middle;