import React from "react"
import compose from "../../services/compose/compose"
import Item from "../Item/Item"
import hocGetData from "../hocs/hocGetData"
import hocItem from "../hocs/hocItem"
import {methodToPropsPerson, 
        methodToPropsPlanet,
        methodToPropsStarship} from "../../services/methodToProps/methodToProps"


const PersonItem = compose(
    hocGetData(methodToPropsPerson),
    hocItem
)(Item)

const PlanetnItem = compose(
    hocGetData(methodToPropsPlanet),
    hocItem
)(Item)

const StarshipItem = compose(
    hocGetData(methodToPropsStarship),
    hocItem
)(Item)


export {
    PersonItem,
    PlanetnItem,
    StarshipItem
}