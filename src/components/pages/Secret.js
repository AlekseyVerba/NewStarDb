import React from "react"
import {Redirect} from "react-router-dom"

const Secret = ({isLog}) => {

    if (isLog) {
        return <h1>Это скрытая информация</h1>
    } else {
        return <Redirect to="/login/" />
    }
    
}

export default Secret