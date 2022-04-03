import React from 'react';
import './Login.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisabled: true,
      email: '',
      password: '',
    };
  }

  validateButton = () => {
    const { email, password } = this.state;
    // source: https://stackabuse.com/validate-email-addresses-with-regular-expressions-in-javascript/
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
    const minCharacters = 6;

    if (email.match(emailRegex) && password.length >= minCharacters) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  handleSubmit = () => {
    // event.preventDefault();
    const { dispatchEmail, history } = this.props;
    const { email } = this.state;

    dispatchEmail(email);
    history.push('/carteira');
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.validateButton();
    });
  }

  render() {
    const { buttonDisabled, email, password } = this.state;
    return (
      <form>
        Login
        <label htmlFor="email-input">
          <input
            value={ email }
            name="email"
            placeholder="email"
            data-testid="email-input"
            type="text"
            id="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          <input
            value={ password }
            name="password"
            placeholder="password"
            data-testid="password-input"
            type="password"
            id="password-input"
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="submit"
          disabled={ buttonDisabled }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
