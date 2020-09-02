import React from 'react';
import Counter from './counter';

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    console.log('ali');
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
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
