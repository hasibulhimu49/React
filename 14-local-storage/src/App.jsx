const App = () => {
  // localStorage.setItem("user", "Hasibul");
  // localStorage.setItem("age", "25");

  // localStorage.clear();

  // let user = localStorage.getItem("user");
  // let age = localStorage.getItem("age");
  // console.log(user, age);

  // localStorage.removeItem("user");

  const details = {
    name: "hasibul",
    age: 26,
    city: "Dhaka",
  };

  localStorage.setItem("user", JSON.stringify(details));

  // const d=localStorage.getItem("user")
  const d = JSON.parse(localStorage.getItem("user"));

  console.log(d);
  console.log(typeof d);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
