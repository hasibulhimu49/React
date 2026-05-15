import { MoveRight } from "lucide-react";

const Card = ({ item }) => {
  return (
    <div
      className="relative h-[88%] w-[290px] rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${item.img})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        
        {/* ID */}
        <h1 className="bg-white text-black font-semibold rounded-full w-10 h-10 flex items-center justify-center">
          {item.id}
        </h1>

        {/* bottom */}
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex items-center justify-between">
            
            <button className="h-9 px-5 text-sm rounded-full bg-blue-600">
              {item.status}
            </button>

            <div className="w-9 h-9 flex items-center justify-center bg-blue-600 rounded-full">
              <MoveRight size={18} />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;