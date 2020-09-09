import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center my-5">Login</h1>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form>
              <div className="form-group ">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" className="form-control" type="password" />
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
