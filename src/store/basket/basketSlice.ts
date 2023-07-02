import { IMovie } from '@/types/movie'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BasketItem extends IMovie {
  counter: number
}

interface MoviesState {
  data: BasketItem[]
}

const initialState: MoviesState = {
  data: []
}

const basketSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addBasketItem: (state, action: PayloadAction<IMovie>) => {
      const existingItem = state.data.find(item => item.id === action.payload.id);
      
      if (existingItem && existingItem.counter < 30) {
        existingItem.counter += 1;
      } else if (!existingItem) {
        state.data.push({...action.payload, counter: 1});
      }
    },
    removeBasketItem: (state, action: PayloadAction<IMovie>) => {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      
      if (index !== -1 && state.data[index].counter === 1) {
        state.data.splice(index, 1);
      }
      else if(index !== -1 && state.data[index].counter > 1) {
        state.data[index].counter -= 1
      }
    },
    clearBasketItem: (state, action: PayloadAction<IMovie>) => {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      
      console.log("ewqfqwfwqfq")
      if(index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
})

export const { addBasketItem, removeBasketItem, clearBasketItem } = basketSlice.actions
export default basketSlice.reducer
