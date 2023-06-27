import { IMovie } from '@/types/movie';
import { API } from '@/API/API'
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'


interface MoviesState {
  rows: IMovie[]
}

const initialState: MoviesState = {
  rows: []
}

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (cinemaId: string | null) => {
    const response = await API.movies.get(cinemaId || "")
    return (await response) as IMovie[]
  }
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.rows = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
        state.rows = action.payload
      })
  },
})

export const { addMovies } = moviesSlice.actions
export default moviesSlice.reducer
