import React, { Component } from "react";
import phonesData from "../data/phones.json";
import Phone from "../components/Phone";

const drawSpinner = (
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

class Phones extends Component {
  state = {
    phones: [],
    spinner: true
  };

  fetchBeers = () => {
    this.setState({ phones: phonesData });
  };

  componentDidMount() {
    this.fetchBeers();
    setTimeout(() => this.setState({ spinner: false }), 500);
  }

  render() {
    return (
      <article
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly"
        }}
      >
        {this.state.spinner
          ? drawSpinner
          : !this.state.spinner &&
            this.state.phones.map(phone => <Phone {...phone} key={phone.id} />)}
      </article>
    );
  }
}

export default Phones;
