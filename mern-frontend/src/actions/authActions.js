import { GET_ERRORS} from './types';
import axios from 'axios';

export const registerUser = (userData, history) => dispatch => {
    axios
    .post('http://localhost:4000/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};