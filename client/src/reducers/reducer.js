import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_COLORS_START,
    GET_COLORS_SUCCESS,
    GET_COLORS_FAIL
} from '../actions'


const initialState = {
    loginData: {},
    colors: [],
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                loginData: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isFetching: false,
                error: '',
            }
        case GET_COLORS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_COLORS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                colors: action.payload,
            }
        case GET_COLORS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}