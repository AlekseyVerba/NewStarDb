import React from "react"

const Record = ({data, field, label}) => {
    return (
        <li>
            {label}: {data[field]} 
        </li>
    )
}

export default Record