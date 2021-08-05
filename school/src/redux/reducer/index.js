import { trainingReducer } from "./training";
import {combineReducers} from 'react-redux'
export const allReducers=combineReducers({
    training:trainingReducer
})