import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            {/* Default home page to /movies */}
            <Redirect exact from="/" to="/movies" />
            {/* Redirect all invalid routes to not found page */}
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
