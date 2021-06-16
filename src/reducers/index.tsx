import { combineReducers } from 'redux';
import usersDetails from './userDetails';

export default combineReducers({
    usersDetails: usersDetails,
});