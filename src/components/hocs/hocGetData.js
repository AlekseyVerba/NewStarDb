import React from "react"
import {Consumer} from "../../services/context/context"

const hocGetData = (transformData) => (Wrapper) => {
    return (props) => {
        return <Consumer>
            {
                (value) => {
                    const transformValue = transformData(value)
                    return <Wrapper {...props} {...transformValue} />
                }
            }
        </Consumer>
    }
}

export default hocGetData;