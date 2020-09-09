import React, { Component } from 'react';
import Input from './common/input';

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
              <Input
                name="username"
                label="Username"
                value={account.username}
                type="text"
                onChange={this.handleChange}
              />
              <Input
                name="password"
                label="Password"
                value={account.password}
                type="password"
                onChange={this.handleChange}
              />
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
