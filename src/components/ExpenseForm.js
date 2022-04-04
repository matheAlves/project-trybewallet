import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      paymentMethods: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      tags: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
  }

  createDropdown = (options) => (
    options.map((option, index) => (
      <option
        value={ option }
        key={ index }
      >
        {option}
      </option>))
  );

  render() {
    const { currencies } = this.props;
    const { paymentMethods, tags } = this.state;

    return (
      <form>

        <label htmlFor="value-input">
          Valor:
          <input
            id="value-input"
            type="number"
            data-testid="value-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            id="description-input"
            type="text"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            id="currency-input"
            data-testid="currency-input"
          >
            {this.createDropdown(currencies)}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select
            id="method-input"
            data-testid="method-input"
          >
            {this.createDropdown(paymentMethods)}
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          <select
            id="tag-input"
            data-testid="tag-input"
          >
            {this.createDropdown(tags)}
          </select>
        </label>

      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(ExpenseForm);
