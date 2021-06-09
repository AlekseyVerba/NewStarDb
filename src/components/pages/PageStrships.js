import React, { Component } from "react"
import {StarshipList} from "../downBlock/list"
import {withRouter} from "react-router-dom"

const PageStarships = ({history}) => {

        return (
            <StarshipList changeId={(itemId) => {
                history.push(itemId)
            }} />
            // <PersonItem momentId={4}/>
            // <PersonList />
        )
}

export default withRouter(PageStarships)