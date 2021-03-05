import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_ERROR,
} from "../actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_REQUEST_SUCCESS:
      const newData = Object.keys(action.data).map((id) => {
        return action.data[id];
      });
      return { ...state, products: newData, isLoading: false };
    case FETCH_REQUEST_ERROR:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
