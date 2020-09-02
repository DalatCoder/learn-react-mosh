import React from 'react';
import { Component } from 'react';

class MovieItem extends Component {
  handleClick = () => {
    this.props.delete(this.props.movie);
  };

  render() {
    const {
      title,
      genre: { name },
      numberInStock,
      dailyRentalRate,
    } = this.props.movie;
    return (
      <tr>
        <td>{title}</td>
        <td>{name}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <button onClick={this.handleClick} className="btn btn-danger btn-sm">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default MovieItem;
