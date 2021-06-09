import React, { Component } from "react"
import Error from "../Error/Error"
import Spinner from "../Spinner/Spinner"

const hocList = (Wrapper) => {
    return class extends Component {
        state = {
            items: null,
            isLoading: true,
            isError: false
        }

        componentDidMount() {
            this.updateList()
        
        }

        updateList() {
            this.setState({
                isLoading: true
            })
            const {getData} = this.props
            getData()
                .then((data) => {
                    this.setState({
                        items: [
                            ...data
                        ],
                        isLoading: false
                    })
                })
                .catch((er) => {
                    this.setState({
                        isLoading: false,
                        isError: true
                    })
                })
        }

        render() {
            const {items, isError, isLoading} = this.state
            const spinnerBlock = isLoading ? <Spinner /> : null
            const errorBlock = isError ? <Error /> : null
            const itemBlock = !isError && !isLoading ? <Wrapper items={items} {...this.props} /> : null

            return (
                <>  
                    {spinnerBlock}
                    {errorBlock}
                    {itemBlock}
                </>
            )
        }
    }
} 
export default hocList