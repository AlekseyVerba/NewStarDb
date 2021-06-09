import React from "react"
import {Redirect} from "react-router-dom"

const Login = ({loginIn, isLog}) => {

    if (isLog) {
        return <Redirect to="/" />
    }

    return (
        <div>
            Login
            <button onClick={loginIn}>Залогонититься</button>
        </div>
    )
}

export default Login