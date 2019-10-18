import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const GET_COLORS_START = 'GET_COLORS_START';
export const GET_COLORS_SUCCESS = 'GET_COLORS_SUCCESS';
export const GET_COLORS_FAIL = 'GET_COLORS_FAIL'

export const DELETE_START = 'DELETE_START';
export const DELETE_FAIL = 'DELETE_FAIL';

export const EDIT_START = 'EDIT_START';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAIL = 'EDIT_FAIL'

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL'

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
            dispatch({ type: GET_COLORS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_COLORS_FAIL, payload: err.response }))
}

export const removeColor = id => dispatch => {
    dispatch({ type: DELETE_START });
    axiosWithAuth()
        .delete(`/api/colors/${id}`)
        .catch(err => dispatch({ type: DELETE_FAIL, payload: err.response }))
}

export const editTheColor = (id, color) => dispatch => {
    dispatch({ type: EDIT_START })
    axiosWithAuth()
        .put(`/api/colors/${id}`, color)
        .then(res => {
            console.log('edited color', res)
            // dispatch({ type: EDIT_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: EDIT_FAIL, payload: err.response }))
}

export const addColor = color => dispatch => {
    dispatch({ type: ADD_START })
    axiosWithAuth()
        .post('/api/colors', color)
        .then(res =>
            dispatch({ type: ADD_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: ADD_FAIL, payload: err.response }))

}