import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './features/categorySlice'

export function makeStore() {
    return configureStore({
        reducer: {
            categories: categoriesReducer
        }
    })
}

const store = makeStore()

export type AppDispatch = typeof store.dispatch

export const dispatch = store.dispatch

export const getState = store.getState

export default store
