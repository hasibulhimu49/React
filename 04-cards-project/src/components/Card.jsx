import amazonLogo from "../assets/amazon.png";
import { FaBookmark } from "react-icons/fa";

const Card = (props) => {

  return (
    <div className="card-container">

      <div className="card-header">
        <div className="logo">
          <img src={props.logo} alt="Amazon" />
        </div>
        <div>
          <p>
            Save{" "}
            <span>
              <FaBookmark />
            </span>
          </p>
        </div>
      </div>

      <div className="card-middle">
        <div className="company">
          <h3>{props.company}</h3>
          <p>{props.time}</p>
        </div>
        <div>
          <h2>{props.position}</h2>
        </div>
        <div className="time">
          <p>{props.type}</p>
          <p>{props.level}</p>
        </div>
      </div>

      <div className="card-footer">
        <div className="card-salary">
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
