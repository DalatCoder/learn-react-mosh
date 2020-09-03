import React, { Component, Fragment } from 'react';
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

  handleLike = ({ _id }) => {
    this.setState((st) => ({
      movies: st.movies.map((movie) =>
        movie._id !== _id ? movie : { ...movie, liked: !movie.liked }
      ),
    }));
  };

  handleDelete = ({ _id }) => {
    this.setState((st) => ({
      movies: st.movies.filter((m) => m._id !== _id),
    }));
  };

  render() {
    const count = this.state.movies.length;

    if (count === 0)
      return (
        <p className="lead my-4 text-center text-danger">
          There is no movies in the database.
        </p>
      );

    return (
      <Fragment>
        <p className="lead my-4 text-center">
          Showing {count} movies in the database.
        </p>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <MovieItem
                key={movie._id}
                onDelete={this.handleDelete}
                onLike={this.handleLike}
                movie={movie}
              />
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Movies;
