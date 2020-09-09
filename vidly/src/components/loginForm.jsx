import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1 className="text-center text-dark my-5">Login</h1>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group ">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  className="form-control"
                  type="text"
                  name="username"
                  autoComplete="off"
                  autoFocus
                  value={account.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="form-control"
                  name="password"
                  type="password"
                  value={account.password}
                  onChange={this.handleChange}
                />
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
