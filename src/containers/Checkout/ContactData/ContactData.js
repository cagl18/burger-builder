import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHanlder = event => {
    event.preventDefault();
    // console.log(this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Carlos Gonzalez',
        address: {
          street: '123 main st',
          zipCode: '10021',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        console.log(response);
        this.setState({ loading: false });
        this.props.history.push('/'); //redirecting to home after successul request
      }) //saving order on the backend
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          name='name'
          type='text'
          placeholder='Your Name'
        />
        <input
          className={classes.Input}
          name='email'
          type='text'
          placeholder='Your Mail'
        />
        <input
          className={classes.Input}
          name='street'
          type='text'
          placeholder='Street'
        />
        <input
          className={classes.Input}
          name='postal'
          type='text'
          placeholder='Postal Code'
        />
        <Button btnType='Success' clicked={this.orderHanlder}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
