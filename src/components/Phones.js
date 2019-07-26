import React, { Component }  from 'react';
import phonesData from '../data/phones.json';
import Phone from '../components/Phone';

class Phones extends Component {
  state = {
    phones: []
  }

  fetchBeers = () => {
    this.setState({ phones: phonesData})
  }

  componentDidMount() {
    this.fetchBeers()
  }

  render() {
    return (
      <article className="Beers">
        {this.state.phones.map(phone => <Phone { ...phone } key={phone.id}/>)}
      </article>
    );
  }
}

export default Phones