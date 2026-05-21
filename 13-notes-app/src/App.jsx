import { useState } from "react";

const App = () => {
  const [title, setTittle] = useState("");
  const [details, setDetails] = useState("");

  const [notes, setNotes] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    const copyNotes = [...notes];
    copyNotes.push({ title, details });

    setNotes(copyNotes);

    setTittle("");
    setDetails("");
  }

  function deleteHandler(idx) {
    const copyNotes = [...notes];
    copyNotes.splice(idx, 1);
    setNotes(copyNotes);
  }

  return (
    <div className="flex">
      <div className="h-screen w-1/2">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className=" flex flex-col gap-6  p-10 items-start"
        >
          <h1 className="text-2xl font-bold py-2">Add Your Notes</h1>

          <input
            type="text"
            placeholder="Enter your notes"
            className="border-2 rounded h-15 px-5 w-full"
            value={title}
            onChange={(e) => {
              setTittle(e.target.value);
            }}
          ></input>

          <textarea
            placeholder="Write details"
            className="border-2 rounded h-35 px-5  w-full"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          ></textarea>

          <button className="bg-black text-white px-5 py-2 rounded  w-full">
            Add Note
          </button>
        </form>
      </div>

      <div className="border-2"></div>

      <div className="flex flex-wrap gap-6 p-10 w-1/2   h-full overflow-auto">
        <h1 className="text-2xl font-bold py-2 w-full">Current Notes</h1>

        {notes.map((elem, idx) => {
          return (
            <div
              key={idx}
              value={notes}
              className="h-52 w-44 rounded-2xl bg-cover flex flex-col justify-between
               bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg')] p-4 "
            >
              <div>
                <h1 className="text-2xl font-bold overflow-hidden wrap-break-word">
                  {elem.title}
                </h1>
                <div className="border"></div>
                <h2 className="overflow-hidden mt-2 text-gray-600 font-medium leading-tight">
                  {elem.details}
                </h2>
              </div>
              <button
                className="w-full bg-red-700 rounded text-white align-middle text-xs py-1 cursor-pointer active:scale-95"
                onClick={() => {
                  deleteHandler(idx);
                }}
              >
                Delete Notes
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
