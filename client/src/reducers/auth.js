import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default (state = initialState, action) => {
    const { type, data } = action

    switch (type) {
        case SIGNUP_SUCCESS:
            localStorage.setItem('token', data.token)
            return {
                ...state,
                ...data,
                isAuthenticated: true,
                loading: false
            }
        case SIGNUP_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: true,
                loading: false
            }
        default:
            return state
    }
}