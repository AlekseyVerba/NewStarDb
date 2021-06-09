import React, { Component } from "react"
import {PersonList} from "../downBlock/list"
import {PersonItem} from "../downBlock/item"
import Row from "../row/Row"
import Record from "../Record/Record"
import {withRouter} from "react-router-dom"

const PagePerson = ({match, history}) => {
    const constItemView = match.params.id ? <PersonItem momentId={match.params.id}>
                                        <Record field="name" label={"Имя"} />
                                        <Record field="height" label={"Рост"} />
                                        <Record field="mass" label={"Вес"} />
                                        <Record field="hairColor" label={"Цвет волос"} />
                                    </PersonItem> : 
                                    <h3 className="item-block">Выберите элемент</h3>

    return (
        <Row left={<PersonList changeId={(id) => history.push(id)} />} right={constItemView} />
        // <PersonItem momentId={4}/>
        // <PersonList />
    )
}

export default withRouter(PagePerson)

