import React, { Fragment, Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    this.setState((st) => ({
      counters: st.counters.map((counter) => ({ ...counter, value: 0 })),
    }));
  };

  handleIncrement = (counter) => {
    this.setState((st) => ({
      counters: st.counters.map((ct) =>
        ct.id !== counter.id ? ct : { ...ct, value: ct.value++ }
      ),
    }));
  };

  handleDecrement = (counter) => {
    this.setState((st) => ({
      counters: st.counters.map((ct) =>
        ct.id !== counter.id
          ? ct
          : ct.value > 0
          ? { ...ct, value: ct.value-- }
          : ct
      ),
    }));
  };

  handleDelete = (counterId) => {
    this.setState((st) => ({
      counters: st.counters.filter((ct) => ct.id !== counterId),
    }));
  };

  render() {
    return (
      <Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
