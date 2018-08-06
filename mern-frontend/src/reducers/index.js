import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import meetupReducer from './meetupReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    meetup: meetupReducer
})