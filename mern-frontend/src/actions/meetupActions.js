import axios from 'axios';
import {GET_ERRORS, GET_MEETUP} from './types';

export const getMeetup = () => dispatch => {
    axios
        .get(`http://localhost:4000/meetups/5b68122e60264d331b73b6ca`)
        .then(res => dispatch({
            type: GET_MEETUP,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: {}
        }))
};