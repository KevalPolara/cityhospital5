import { ADD_TO_WISHLIST, COLUR_WISHLIST, DELETE_WISHLIST } from "../ActionTypes";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const initialState = {
  fav: [],
  error: null
};

export const favReducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case ADD_TO_WISHLIST:
      if (state.fav.includes(action.payload.id)) {
         state.fav.filter(v => v !== action.payload.id);
      } else {
        state.fav.push(action.payload.id)
      }

      return {
        fav: state.fav,
        error: null
      };

    case DELETE_WISHLIST:
      let ans=state.fav.filter((v)=>v!==action.payload)

      return {
        fav:ans,
        error: null
      };

    default:
      return state;
  }
};
