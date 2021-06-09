import React, { Component } from "react"
import Head from "../Head/Head"
import RandomPlanetWrapper from "../RandomPlanet/RandomPlanetWrapper"
import {Provider} from "../../services/context/context"
import getData from "../../services/getData"
import PagePerson from "../pages/PagePerson"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import PagePlanets from "../pages/PagePlanets"
import PageStarships from "../pages/PageStrships"
import Secret from "../pages/Secret"
import Login from "../pages/Login"
import {StarshipItem, PlanetnItem, PersonItem} from "../downBlock/item"
import Record from "../Record/Record"
import "./App.css"



export default class App extends Component {

    getData = new getData()

    state = {
        login: false,
    }

    loginIn = () => {
        this.setState({
            login: true
        })
    }

    render() {
        return (
            <div className="container">
                <Provider value={this.getData}>
                    <Router>
                        <Head/>
                        <RandomPlanetWrapper changeTime={10000}/>
                           <Switch>
                                <Route path="/" exact={true} render={() => <h1>DB Приложение</h1>} />
                                <Route path="/people/:id?" component={PagePerson} />



                                <Route path="/planets" exact={true} component={PagePlanets} />
                                
                                <Route path="/planets/:id" render={({match}) => {
                                    const id = match.params.id
                                    return (
                                        <PlanetnItem momentId={id}>
                                            <Record field="name" label={"Название"} />
                                            <Record field="diameter" label={"Диаметр"} />
                                            <Record field="population" label={"Население"} />
                                            <Record field="created" label={"Создан"} />
                                        </PlanetnItem>
                                    )
                                }} />



                                <Route path="/starships" exact={true} component={PageStarships} />
                                <Route path="/starships/:id" render={({match}) => {

                                    const id = match.params.id
                                    return (
                                        <StarshipItem momentId={id}>
                                            <Record field="name" label={"Название"} />
                                        </StarshipItem>
                                    )
                                }} />

                                <Route path="/secret/" render={() => <Secret isLog={this.state.login} />} />
                                <Route path="/login/" render={() => <Login isLog={this.state.login} loginIn={this.loginIn} />} />
                                <Redirect to="/" />
                           </Switch>
                    </Router>
                </Provider>
            </div>
        )
    }
}