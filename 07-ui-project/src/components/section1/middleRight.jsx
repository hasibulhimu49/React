import Card from "../card";

const MiddleRight = ({data}) => {

 console.log("MiddleRight props:", data);


  return (
    <div className="h-full w-2/3 overflow-x-auto  overflow-y-hidden">

      <div className="h-full flex gap-6 flex-nowrap w-max">

        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}


      </div>
    </div>
  );
};

export default MiddleRight;
