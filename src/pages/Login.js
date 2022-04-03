import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisabled: true,
      email: '',
    };
  }

  render() {
    return (
      <div className="form">
        Login
        <label htmlFor="email-input">
          <input
            placeholder="email"
            data-testid="email-input"
            type="email"
            id="email-input"
          />
        </label>
        <label htmlFor="password-input">
          <input
            placeholder="password"
            data-testid="password-input"
            type="password"
            id="password-input"
          />
        </label>

        <button
          type="submit"
        >
          Entrar
        </button>

      </div>
    );
  }
}

export default Login;
