import {GET_MEETUP} from "../actions/types";

const initialState = {
    meetup: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MEETUP:
            return {
                ...state,
                meetup: action.payload
            };
        default:
            return state;
    }
}
