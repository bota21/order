import axios from "../../axiosOrder";
import {
  ADD_INGRIDIENTS,
  REMOVE_INGRIDIENTS,
  PLACE_ORDER,
  CLOSE_MODAL,
  SEND_ORDER,
  CHANGE_PURCHASING,
  INIT_ORDER,
  ADD_TO_TOTAL,
  REMOVE_AT_TOTAL,
} from "../actionTypes";

export const addIngridients = (ingName) => {
  return { type: ADD_INGRIDIENTS, ingName };
};
export const removeIngridient = (ingName) => {
  return { type: REMOVE_INGRIDIENTS, ingName };
};
export const placeOrder = () => {
  return { type: PLACE_ORDER };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
export const changePurchasing = (purchasing) => {
  return { type: CHANGE_PURCHASING, purchasing };
};
export const initState = () => {
  return { type: INIT_ORDER };
};
const sendOrder = () => {
  return { type: SEND_ORDER };
};
const sendOrderSuccess = () => {
  return { type: SEND_ORDER };
};
const sendOrderError = (error) => {
  return { type: SEND_ORDER, error };
};
export const addToTotal = () => {
  return { type: ADD_TO_TOTAL };
};
export const removeAtTotal = () => {
  return { type: REMOVE_AT_TOTAL };
};
export const sendOrderProducts = (data) => {
  return async (dispatch) => {
    try {
      dispatch(sendOrder());
      await axios.post("/orders.json", data);
      dispatch(sendOrderSuccess());
    } catch (e) {
      dispatch(sendOrderError(e));
    }
  };
};
