import axios from "../../axiosOrder";
import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_ERROR,
} from "../actionTypes";

export const productFetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const productFetchRequestSuccess = (data) => {
  return { type: FETCH_REQUEST_SUCCESS, data };
};
export const productFetchRequestError = (error) => {
  return { type: FETCH_REQUEST_ERROR, error };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(productFetchRequest());
      const response = await axios.get("/products.json");
      dispatch(productFetchRequestSuccess(response.data));
    } catch (e) {
      dispatch(productFetchRequestError(e));
    }
  };
};
