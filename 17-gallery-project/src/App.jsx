import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userdata, setuserData] = useState([]);

  const [index, setIndex] = useState(1);

  async function getData() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=16`,
    );
    setuserData(response.data);
  }

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h1 className=" text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading.............
    </h1>
  );

  if (userdata.length > 0) {
    printUserData = userdata.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-80 w-100 rounded-xl overflow-hidden ">
              <img
                src={elem.download_url}
                alt="Not Found"
                className="h-full w-full object-cover "
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen text-white overflow-auto">
      {/* <button
        className="bg-green-600 m-5 h-10 rounded w-40 active:scale-95"
        onClick={getData}
      >
        Get Data
      </button> */}

      <div className=" flex flex-wrap justify-center gap-5 p-5">
        {printUserData}
      </div>

      <div className="flex justify-center items-center p-4 gap-6">
        <button
          className="bg-amber-900 h-10 w-40 rounded gap-2 font-semibold cursor-pointer active:scale-95"
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setuserData([]);
            }
          }}
        >
          Prev
        </button>
        <h3 p-10>Page {index}</h3>
        <button
          className="bg-amber-900 h-10 w-40 rounded gap-2 font-semibold cursor-pointer active:scale-95"
          onClick={() => {
            setIndex(index + 1);
            setuserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
