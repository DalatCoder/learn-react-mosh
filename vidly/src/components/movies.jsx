import React, { Component, Fragment } from 'react';
import { getMovies } from '../services/fakeMovieService.js';
import { paginate } from '../utils/paginate';

// Components
import MovieItem from './MovieItem';
import Pagination from './common/pagination';

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
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

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (count === 0)
      return (
        <p className="lead my-4 text-center text-danger">
          There is no movies in the database.
        </p>
      );

    const movies = paginate(allMovies, currentPage, pageSize);

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
            {movies.map((movie) => (
              <MovieItem
                key={movie._id}
                onDelete={this.handleDelete}
                onLike={this.handleLike}
                movie={movie}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </Fragment>
    );
  }
}

export default Movies;
