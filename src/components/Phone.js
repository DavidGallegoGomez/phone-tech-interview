import React from "react";
import { Link } from "react-router-dom";

const Phone = ({ imageFileName, name, id }) => (
  <div className="card m-3" style={{ width: "300px" }}>
    <Link to={`/${id}`}>
      <div className="card-header">{name}</div>
      <img
        className="card-img-top"
        src={process.env.PUBLIC_URL + `/images/${imageFileName}`}
        alt={name}
      />
    </Link>
  </div>
);

export default Phone;
