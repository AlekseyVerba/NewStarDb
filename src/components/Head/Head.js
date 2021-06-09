import React from "react"
import {Link} from "react-router-dom"
import "./Head.css"


const Head = () => {
    return (
        <ul>
            <Link to="/" className="head-link">На главную</Link>
            <Link to="/people/" className="head-link">Персонажи</Link>
            <Link to="/planets/" className="head-link">Планеты</Link>
            <Link to="/starships/" className="head-link">Корабли</Link>
            <Link to="/login/" className="head-link">Авторизация</Link>
            <Link to="/secret/" className="head-link">Секрет</Link>
        </ul>
    )
}

export default Head