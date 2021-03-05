import axios from "../axiosOrder";
import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_ERROR,
  ADD_INGRIDIENTS,
} from "./actionTypes";

const productFetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const productFetchRequestSuccess = (data) => {
  return { type: FETCH_REQUEST_SUCCESS, data };
};

const productFetchRequestError = (error) => {
  return { type: FETCH_REQUEST_ERROR, error };
};
export const addIngridients = ingName => {
    return {type: ADD_INGRIDIENTS, ingName}
}

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(productFetchRequest());
      const response = await axios.get(".json");
      dispatch(productFetchRequestSuccess(response.data));
    } catch (e) {
      dispatch(productFetchRequestError(e));
    }
  };
};
