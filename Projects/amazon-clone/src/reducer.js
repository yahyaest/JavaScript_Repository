export const initialState = { basket: [], user: null };

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    case "ADD_TO_BASKET":
      // Logic foe adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (BasketItem) => BasketItem.id === action.id
      );

      if (index >= 0) {
        // Item exist in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id:${action.id}) as its not in basket`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
