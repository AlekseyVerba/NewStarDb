import React from "react"
import "./Item.css"
import Row from "../row/Row"

const Item = (props) => {
    const {data} = props
    const rightEl = (
        <ul>
            {
            React.Children.map(props.children, (item) => {
                return React.cloneElement(item, {data})
            })
            }
        </ul>
    )
    return (
        <div className="item">
            {/* <img /> */}
            <img className="img-item" src={props.itemImg}/>
            {rightEl}
        </div>
    )
}

export default Item