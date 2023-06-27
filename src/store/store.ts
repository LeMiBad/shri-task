import { configureStore, Store } from '@reduxjs/toolkit'
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import moviesReducer from './movies/moviesSlice'
import basketReducer from './basket/basketSlice'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    basket: basketReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>

const makeStore: MakeStore<Store<RootState, AnyAction>> = (context: Context) => store

export const wrapper = createWrapper(makeStore)
