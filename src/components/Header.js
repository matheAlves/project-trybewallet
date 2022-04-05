import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, curr) => {
      acc += curr.value * curr.exchangeRates[curr.currency].ask;
      return acc;
    }, 0);

    return (
      <header>
        <span data-testid="email-field">
          {email}
        </span>
        <span data-testid="total-field">
          {total.toFixed(2)}
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>

      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { user: { email }, wallet: { expenses } } = state;
  return {
    email,
    expenses,
  };
};

export default connect(mapStateToProps, null)(Header);
