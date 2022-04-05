import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newExpenseAction } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    const { dispatchExpense, expenses } = this.props;
    this.setState({
      id: expenses.length,
    }, () => {
      dispatchExpense(this.state);
      this.setState({
        value: 0,
      });
    });
  }

  render() {
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;
    const {
      value,
      description,
    } = this.state;

    return (
      <form>

        <label htmlFor="value-input">
          Valor:
          <input
            name="value"
            value={ value }
            id="value-input"
            type="number"
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            name="description"
            value={ description }
            id="description-input"
            type="text"
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            name="currency"
            id="currency-input"
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {this.createDropdown(currencies)}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select
            name="method"
            id="method-input"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            {this.createDropdown(paymentMethods)}
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          <select
            name="tag"
            id="tag-input"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            {this.createDropdown(tags)}
          </select>
        </label>

        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpense: (newExpense) => dispatch(newExpenseAction(newExpense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
