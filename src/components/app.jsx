import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/app.css';
import NavBar from './navbar';
import Properties from './properties';
import AddProperty from './add-property';

const App = () => (
  <div>
    <h1>Surreal Estate</h1>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </Switch>
  </div>
);

export default App;
