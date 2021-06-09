import React, { Component } from "react"
import RandomPlanet from "./RandomPlanet"
import hocGetData from "../hocs/hocGetData"
import {methodToPropsPlanet} from "../../services/methodToProps/methodToProps"
import Spinner from "../Spinner/Spinner"
import Error from "../Error/Error"

const RandomPlanetWrapper = (Wrapper) => {
    
    return class extends Component {
            state = {
                item: null,
                imgItem: null,
                isError: false,
                isLoading: true
            }

            static defaultProps = {
                changeTime: 2000
            }

            componentDidMount = () => {
                this.getDataPlanet()
                this.time = setInterval(this.getDataPlanet, this.props.changeTime)
            }

            getDataPlanet = () => {
                this.setState({
                    isLoading: true
                })
                const {getData, getImg} = this.props
                const id = Math.floor(Math.random() * 25) + 2
                // const id = 255
                getData(id)
                    .then(data => {
                        const img = getImg(id)
                        this.setState({
                            item: {
                                ...data
                            },
                            imgItem: img,
                            isLoading: false
                        })
                    })
                    .catch(er => {
                        this.setState({
                            isLoading: false,
                            isError: true
                        })
                    })
            }

            render() {
                const {item, imgItem, isError, isLoading} = this.state
                const loadingBlock = isLoading ? <Spinner/> : null
                const errorBlock = isError ? <Error/> : null
                const wrapperBlock = !isLoading && !isError ?<Wrapper {...item} img={imgItem} /> : null
                return (
                    <>
                        {loadingBlock}
                        {errorBlock}
                        {wrapperBlock}
                    </>
                )
            }
    }
}

export default hocGetData(methodToPropsPlanet)(
                RandomPlanetWrapper(RandomPlanet)
                )
    