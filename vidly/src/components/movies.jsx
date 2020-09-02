import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js';

// Components
import MovieItem from './MovieItem';

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleDelete = ({ _id }) => {
    this.setState((st) => ({
      movies: st.movies.filter((m) => m._id !== _id),
    }));
  };

  render() {
    return (
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <MovieItem
              key={movie._id}
              delete={this.handleDelete}
              movie={movie}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
