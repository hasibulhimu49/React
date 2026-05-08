const Card = (props) => {
    console.log(props);
  return (
    <div className="card">
      <img src={props.image} alt="profile" />
      <h1>{props.name}, Age is {props.age}</h1>

      <p>
        Frontend Developer learning React and building modern web applications.
      </p>

      <button>View Profile</button>
    </div>
  );
};

export default Card;