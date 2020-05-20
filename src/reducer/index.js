import profileReducer from './profilereducer'
import { combineReducers } from 'redux'
export default combineReducers({
activeProfile: profileReducer
})