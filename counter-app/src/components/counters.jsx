import React from 'react';
import Counter from './counter';

class Counters extends React.Component {
  handleReset = () => {
    this.props.onReset();
  };

  render() {
    const { counters, onDelete, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
