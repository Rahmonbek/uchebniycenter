import { trainingReducer } from "./training";
import {combineReducers} from 'redux'
export const allReducers=combineReducers({
    training:trainingReducer
})