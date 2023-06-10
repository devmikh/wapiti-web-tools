import { configureStore } from '@reduxjs/toolkit'
import toolbarReducer from './features/toolbarSlice'

export function makeStore() {
    return configureStore({
        reducer: {
            toolbar: toolbarReducer
        }
    })
}

const store = makeStore()

export type AppDispatch = typeof store.dispatch

export const dispatch = store.dispatch

export const getState = store.getState

export default store
