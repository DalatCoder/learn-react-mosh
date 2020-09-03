import React from 'react';
import { Component } from 'react';
import Like from './common/like';

class MovieItem extends Component {
  handleClick = () => {
    this.props.onDelete(this.props.movie);
  };

  render() {
    const {
      title,
      genre: { name },
      numberInStock,
      dailyRentalRate,
      liked,
    } = this.props.movie;

    return (
      <tr>
        <td>{title}</td>
        <td>{name}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <Like
            liked={liked}
            movie={this.props.movie}
            onClick={this.props.onLike}
          />
        </td>
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
