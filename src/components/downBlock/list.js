import React from "react"
import List from "../List/List"
import hocGetData from "../hocs/hocGetData"
import hocList from "../hocs/hocList"
import {methodToPropsPersonList, methodToPropsPlanetsList, methodToPropsStarshipList} from "../../services/methodToProps/methodToProps"
import compose from "../../services/compose/compose"
import composer from "../../services/composer/composer"

const renderPersonsList = (item) => `${item.name} / ${item.height}`
const renderPlanetsList = (item) => `${item.name} / ${item.diameter}`
const renderStarshipsList = (item) => `${item.name}`


const PersonList = compose(
    hocGetData(methodToPropsPersonList),
    composer(renderPersonsList),
    hocList
)(List)

const PlanetList = compose(
    hocGetData(methodToPropsPlanetsList),
    composer(renderPlanetsList),
    hocList
)(List)

const StarshipList = compose(
    hocGetData(methodToPropsStarshipList),
    composer(renderStarshipsList),
    hocList
)(List)

export {
    PersonList,
    PlanetList,
    StarshipList
}