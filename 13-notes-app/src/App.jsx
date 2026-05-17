const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">

      <div className="flex h-[90vh] bg-gray-800 rounded-xl overflow-hidden shadow-lg">


        {/* Left Side - Form UI */}
        <div className="w-1/2 p-8 flex flex-col justify-start">
          <form className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">Add Notes</h1>
            
            <input
              type="text"
              placeholder="Enter your task title"
              className="p-3 rounded-md bg-gray-700 border border-gray-600 outline-none"
            />

            <textarea
              placeholder="Write task details"
              rows="6"
              className="p-3 rounded-md bg-gray-700 border border-gray-600 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold cursor-pointer"
            >
              Add Task
            </button>
          </form>
        </div>



        {/* Divider */}
        <div className="w-px bg-gray-600"></div>



{/* Right Side - Task Cards UI */}
<div className="w-1/2 p-8 overflow-y-auto">
  <h1 className="text-4xl font-semibold mb-6">Recent Notes</h1>

  {/* Grid Layout: 3 cards per row */}
  <div className="grid grid-cols-3 gap-4">

    {/* Task Card 1 */}
    <div className="bg-white text-black p-4 rounded-lg shadow-md min-h-[220px]">
      <h2 className="text-lg font-bold mb-2">Task Title</h2>
      <p className="text-sm text-gray-700">
        This is the task description.
      </p>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded">
        Delete
      </button>
    </div>

  </div>
</div>

      </div>
    </div>
  );
};

export default App;