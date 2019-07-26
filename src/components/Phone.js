import React from "react";
import { Link } from "react-router-dom";

const Phone = ({ imageFileName, name, id }) => (
  <div className="card mb-3">
    <Link to={`/${id}`}>
      <div className="row no-gutters">
        <div className="col-md-1 text-center p-3">
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/${imageFileName}`
            }
            className="card-img"
            alt={name}
            height="250"
                      />
        </div>

        <div className="col-md-11">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {/* {detail && <p>{description}</p>} */}
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Phone;
