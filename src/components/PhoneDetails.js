import React, { useState } from "react";
import phonesData from "../data/phones.json";

const PhoneDetails = props => {
  const { params } = props.match;
  const foundPhone = phonesData.find(
    phone => phone.id === parseInt(params.phoneId)
  );

  console.log(foundPhone);

  const [spinner, setSpinner] = useState(true);
  const drawSpinner = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  setTimeout(() => setSpinner(false), 500);

  return (
    <article className="PhoneDetail">
      {spinner
        ? drawSpinner
        : !spinner && (
            <div className="text-left row">
              <div className="p-2 col-4">
                <img
                  className="card-img"
                  src={
                    process.env.PUBLIC_URL +
                    `/images/${foundPhone.imageFileName}`
                  }
                  alt={foundPhone.name}
                />
              </div>
              <div className="p-4 col-8">
                <h4 className="card-title">{foundPhone.name}</h4>
                <p className="card-text">
                  <strong>Manufacturer:</strong> {foundPhone.manufacturer}
                </p>
                <p className="card-text">
                  <strong>Description:</strong> {foundPhone.description}
                </p>
                <p className="card-text">
                  <strong>Color:</strong> {foundPhone.color}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${foundPhone.price}
                </p>
                <p className="card-text">
                  <strong>Screen:</strong> {foundPhone.screen}
                </p>
                <p className="card-text">
                  <strong>Processor:</strong> {foundPhone.processor}
                </p>
                <p className="card-text">
                  <strong>Ram:</strong> {foundPhone.ram}
                </p>
              </div>
            </div>
          )}
    </article>
  );
};

export default PhoneDetails;
