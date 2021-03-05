import { ADD_INGRIDIENTS } from "../actionTypes";

const initialState = {
  products: {
    Pizza: 0,
    Caesar: 0,
    Focaccia: 0,
    Lemonade: 0
  },
  delivery: 150,
  total: 0,
  purchasing: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGRIDIENTS:
        console.log(action.ingName)
      return {
        ...state,
        products: {
          ...state.products,          
          [action.ingName]: state.products[action.ingName] + 1,
        },
      };

    default:
      return state;
  }
};

export default reducer;
