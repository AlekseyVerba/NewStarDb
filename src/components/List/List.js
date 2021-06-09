import React from "react"
import {Link} from "react-router-dom"
import "./list.css"


const List = (props) => {
    const {items, changeId} = props
    // debugger
    const viewItems = items.map(item => {
        return (
            <li key={item.id}className="list-item-item" onClick={() => changeId(item.id)}>{props.children(item)}</li>
        )
    })
    return (
        <ul className="list-list">
            {viewItems}
        </ul>
    )
}

export default List