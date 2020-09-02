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

  handleDelete = ({ _id }) => {
    this.setState((st) => ({
      movies: st.movies.filter((m) => m._id !== _id),
    }));
  };

  render() {
    const count = this.state.movies.length;
    const heading =
      count > 0
        ? `There is ${count} movies in the database`
        : 'There is no movie in the database';

    return (
      <Fragment>
        <p className="lead my-4 text-center">{heading}</p>
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
      </Fragment>
    );
  }
}

export default Movies;
