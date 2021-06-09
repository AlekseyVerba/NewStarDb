import React, { Component } from "react"
import {PlanetList} from "../downBlock/list"
import {withRouter} from "react-router-dom"

const PagePlanets = ({history}) => {
    return (
        <PlanetList changeId={(itemId) => {
            history.push(itemId)
        }} />
    )
}

export default withRouter(PagePlanets)