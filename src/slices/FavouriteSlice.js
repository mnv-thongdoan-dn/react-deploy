import { createSlice } from '@reduxjs/toolkit';

export const FavouriteSlice = createSlice({
  name: 'favourite',
  initialState: [],
  reducers: {
    addFav: (state, action) => {
      if(state.includes(action.payload)) {
        return state.filter(item => item !== action.payload);
      } else {
        state.push(action.payload)
      }
    }
  },
});

export const { addFav } = FavouriteSlice.actions

export default FavouriteSlice.reducer
