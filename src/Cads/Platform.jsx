import React from "react";
import "./card-style.css";

const Card = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="yalla-cafe" className="card-img-top"></img>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title"> {props.title} </h4>
        <p className="card-text text-secondary"> {props.paragraph}</p>
        <a
          href="https://www.youtube.com/watch?v=sl5xfLWEnBc&t=24s"
          className="btn btn-outline-success"
        >
          Join Us
        </a>
      </div>
    </div>
  );
};
export default Card;
