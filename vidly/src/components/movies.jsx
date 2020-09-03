import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js';
import { getGenres } from '../services/fakeGenreService.js';
import { paginate } from '../utils/paginate';
import _ from 'lodash';

// Components
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import ListGroup from './common/listgroup';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' },
  };

  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
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

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      movies: allMovies,
    } = this.state;

    if (count === 0)
      return (
        <p className="my-4 text-center text-danger">
          There is no movies in the database.
        </p>
      );

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-md-3 mt-4">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col mt-4">
          <p>Showing {filtered.length} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
