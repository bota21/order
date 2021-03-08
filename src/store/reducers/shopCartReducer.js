import { PRODUCT_PRICES } from "../../prices";
import {
  ADD_INGRIDIENTS,
  REMOVE_INGRIDIENTS,
  PLACE_ORDER,
  CLOSE_MODAL,
  SEND_ORDER,
  SEND_ORDER_SUCCESS,
  CHANGE_PURCHASING,
  INIT_ORDER,
  SEND_ORDER_ERROR,
  ADD_TO_TOTAL,
  REMOVE_AT_TOTAL,
} from "../actionTypes";

const initialState = {
  dishes: {
    Pasta: 0,
    Caesar: 0,
    Focaccia: 0,
    Lemonade: 0,
  },
  delivery: 150,
  totalPrice: 0,
  purchasing: true,
  openModal: false,
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGRIDIENTS:
      return {
        ...state,
        dishes: {
          ...state.dishes,
          [action.ingName]: state.dishes[action.ingName] + 1,
        },
        totalPrice: state.totalPrice + PRODUCT_PRICES[action.ingName],
        purchasing: false,
      };
    case REMOVE_INGRIDIENTS:
      return {
        ...state,
        dishes: {
          ...state.dishes,
          [action.ingName]: state.dishes[action.ingName] - 1,
        },
        totalPrice: state.totalPrice - PRODUCT_PRICES[action.ingName],
        purchasing: false,
      };
    case SEND_ORDER:
      return { ...state, isLoading: true };
    case SEND_ORDER_SUCCESS:
      return { ...state, isLoading: false, openModal: false };
    case SEND_ORDER_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        openModal: false,
      };
    case PLACE_ORDER:
      return { ...state, openModal: true, isLoading: false };
    case CLOSE_MODAL:
      return { ...state, openModal: false };
    case CHANGE_PURCHASING:
      return { ...state, purchasing: true };
    case ADD_TO_TOTAL:
      return { ...state, totalPrice: state.totalPrice + state.delivery };
    case REMOVE_AT_TOTAL:
      return { ...state, totalPrice: state.totalPrice - state.delivery };
    case INIT_ORDER:
      return { ...initialState, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
