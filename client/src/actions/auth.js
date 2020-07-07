import axios from 'axios'

import { setAlert } from './alert'
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL
} from './types'

export const signup = ({ username, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, email, password })

    try {
        const res = await axios.post('/api/users', body, config)
        dispatch({
            type: SIGNUP_SUCCESS,
            data: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')))
        }

        dispatch({
            type: SIGNUP_FAIL
        })
    }
}

export const signin = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('/api/auth', body, config)
        dispatch({
            type: SIGNIN_SUCCESS,
            data: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')))
        }

        dispatch({
            type: SIGNIN_FAIL
        })
    }
}