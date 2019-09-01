import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let summary = <Redirect to='/' />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to='/' />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            checkoutCancelled={this.checkoutCancelHandler}
            checkoutContinue={this.checkoutContinueHandler}
            ingredients={this.props.ings}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
          {/* used render instead or component method to be able to pass down props */}
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
