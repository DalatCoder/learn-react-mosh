import React, { Fragment } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </Fragment>
  );
}

export default App;
