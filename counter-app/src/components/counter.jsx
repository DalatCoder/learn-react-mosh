import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState((st) => ({ value: st.value + 1 }));
  };

  handleDecrement = () => {
    this.setState((st) => ({ value: st.value - 1 }));
  };

  render() {
    return (
      <div>
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
          disabled={this.state.value === 0}
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
