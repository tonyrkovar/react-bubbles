import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const GET_COLORS_START = 'GET_COLORS_START';
export const GET_COLORS_SUCCESS = 'GET_COLORS_SUCCESS';
export const GET_COLORS_FAIL = 'GET_COLORS_FAIL'

export const login = loginInfo => dispatch => {
    dispatch({ type: LOGIN_START });
    axiosWithAuth()
        .post('/api/login', loginInfo)
        .then(res => {
            // console.log(res)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload },
                localStorage.setItem('token', res.data.payload))
        })
        .catch(err => dispatch({ type: LOGIN_FAIL, payload: err.response }))
}

export const getColors = () => dispatch => {
    dispatch({ type: GET_COLORS_START });
    axiosWithAuth()
        .get('/api/colors')
        .then(res => {
            console.log(res.data)
            dispatch({ type: GET_COLORS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_COLORS_FAIL, payload: err.response }))
}