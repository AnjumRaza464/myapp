import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import contactReducer from '../features/contact/contactSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const rootReducer = combineReducers({
  counter: counterReducer,
  contact: contactReducer
})

const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer:persistedReducer
})
export const persistor = persistStore(store)