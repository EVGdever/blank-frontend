import {createStore, applyMiddleware} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

export const store = createStore(rootReducer, applyMiddleware(thunk))
