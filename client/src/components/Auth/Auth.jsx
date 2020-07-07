import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setAlert } from '../../actions/alert'
import { signup, signin } from '../../actions/auth'
import AuthView from './AuthView'

const Auth = ({
    setAlert,
    signup,
    signin,
    isSignUp,
    isSignIn
}) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        isSignUp && signup({ username, email, password })
        isSignIn && signin({ email, password })
    }

    return <AuthView
        isSignUp={!!isSignUp}
        isSignIn={!!isSignIn}
        signUpLink='/signup'
        signInLink='/signin'
        onChange={onChange}
        onSubmit={onSubmit}
        username={username}
        email={email}
        password={password} />
}

Auth.propTypes = {
    setAlert: PropTypes.func.isRequired,
    isSignIn: PropTypes.bool,
    isSignUp: PropTypes.bool,
    signInLink: PropTypes.string,
    signUpLink: PropTypes.string,
    signup: PropTypes.func.isRequired,
    signin: PropTypes.func.isRequired
}

export default connect(
    null,
    { setAlert, signup, signin }
)(Auth)