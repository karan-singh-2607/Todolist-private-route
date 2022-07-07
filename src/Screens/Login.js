import React from 'react'
import { Button } from 'react-bootstrap'
import { login } from '../Routes/isLogin'

const Login = (props) => {
    const handleLogin = () => {
        login()
        props.history.push('/todo')
    }
    return (
        <div>
            <h1>
                Sign In
            </h1>
            <Button onClick={() => handleLogin()}>Login</Button>
        </div>
    )

}

export default Login