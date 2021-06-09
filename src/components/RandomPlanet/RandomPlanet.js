import React from "react"
import "./randomPlanet.css"

const RandomPlanet = ({img, created, diameter, population}) => {
    return (
        <div className="random-planet">
            <img src={img} className="planet-img"/>
            <ul className="random-list">
                <li>
                    Появление : <span>{created}</span>
                </li>
                <li>
                    Диаметр : <span>{diameter}</span>
                </li>
                <li>
                    Население : <span>{population}</span>
                </li>
            </ul>
        </div>
    )
}

export default RandomPlanet