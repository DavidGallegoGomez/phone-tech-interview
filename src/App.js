import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Phones from '../src/components/Phones';
import PhoneDetails from '../src/components/PhoneDetails';
import Header from '../src/components/misc/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className="container">
        <Switch>
          <Route exact path="/" component={Phones} />
          <Route exact path="/:phoneId" component={PhoneDetails} />

          <Redirect to="/"/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
