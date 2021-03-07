import { PRODUCT_PRICES } from "../../prices";
import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_ERROR,
} from "../actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_REQUEST_SUCCESS:
      const productsData = Object.keys(action.data).map((id) => {
        const newData = {
          product: action.data[id].product,
          image: action.data[id].image,
          price: PRODUCT_PRICES[action.data[id].product],
        };
        return newData;
      });
      return { ...state, products: productsData, isLoading: false };
    case FETCH_REQUEST_ERROR:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
