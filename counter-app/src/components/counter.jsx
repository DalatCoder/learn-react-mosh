import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((st) => ({ count: st.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((st) => ({ count: st.count - 1 }));
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-danger btn-sm m-2"
          disabled={this.state.count === 0}
        >
          Decrement
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
