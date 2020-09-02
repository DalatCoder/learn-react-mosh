import React, { Component } from 'react';

class Counter extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.counter);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.counter);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.counter.id);
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
          className="btn btn-outline-secondary btn-sm m-2"
          disabled={this.props.counter.value === 0}
        >
          Decrement
        </button>
        <button
          onClick={this.handleDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
