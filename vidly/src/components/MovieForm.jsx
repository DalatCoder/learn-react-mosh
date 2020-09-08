import React, { Component, Fragment } from 'react';

class MovieForm extends Component {
  handleClick = () => {
    this.props.history.push('/movies');
  };
  render() {
    const {
      match: { params },
    } = this.props;

    return (
      <Fragment>
        <h1>Movie Form for {params.id}</h1>
        <button onClick={this.handleClick} className="btn btn-primary">
          Save
        </button>
      </Fragment>
    );
  }
}

export default MovieForm;
