import axios from 'axios';

import { GET_ALL_MEETUPS } from 'types';

export const getMeetups = () => dispatch => {
    axios
        .get('http://localhost:4000/meetups')
        .then(res => dispatch({
            type: GET_ALL_MEETUPS,
            payload: res.data
        }))
}