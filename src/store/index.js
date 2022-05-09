import { configureStore } from '@reduxjs/toolkit';
import Favourites from '../slices/FavouriteSlice';

const store = configureStore({
  reducer: {
    fav: Favourites
  },
});

export default store;
