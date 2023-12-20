import {
  ADD_TO_WISHLIST,
  COLUR_WISHLIST,
  DELETE_WISHLIST,
  REMOVE_WISHLIST
} from "../ActionTypes";

const initialState = {
  fav: [],
  error: null
};

export const favReducer = (state = initialState, action) => {
  console.log(action, state.fav);

  switch (action.type) {
    case ADD_TO_WISHLIST:
      let favAns = [];

      if (state.fav.includes(action.payload.id)) {
        console.log("Item already in wishlist");
        favAns = state.fav.filter(v => v !== action.payload.id);
      } else {
        console.log("Item not in wishlist");
        // Create a new array with the existing items and the new item
        favAns = [...state.fav, action.payload.id];
      }

      console.log(favAns);

      return {
        fav: favAns,
        error: null
      };

    case DELETE_WISHLIST:
      let ans = state.fav.filter(v => v !== action.payload);

      return {
        fav: ans,
        error: null
      };

    default:
      return state;
  }
};
