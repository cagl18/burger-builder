import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENT_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    //intercepting the initial dispatch request to run aSync code and the finally dispatch the action based on the response of the axios request
    axios
      .get('/ingredients.json')
      .then(response => {
        if (response) {
          dispatch(setIngredients(response.data)); // sending data to redux reducer
        } else {
          dispatch(fetchIngredientsFailed());
        }
      })
      .catch(error => {
        fetchIngredientsFailed();
      });
  };
};
