import { GET_DETAILS, GET_MOVIES } from "../actions";

const INITIAL_STATE = {
    movies: {},
    details: {}
};

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        default:
            return state
    }
};

export default moviesReducer;