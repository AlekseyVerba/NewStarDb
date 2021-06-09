import React, { Component } from "react"
import Spinner from "../Spinner/Spinner"
import Error from "../Error/Error"


const hocItem = (Wrapper) => {
    return class extends Component {
        state = {
            item: [],
            isLoading: true,
            isError: false,
            itemImg: null
        }

        componentDidMount() {
            this.updateItem()
        }

        componentDidUpdate(prevProps) {
            if (prevProps.momentId !== this.props.momentId) {
                this.updateItem()
            }
        }


        updateItem = () => {
            const {getData, momentId, getImg} = this.props
            const urlImg = getImg(momentId)
            this.setState({
                isLoading: true
            })
            getData(momentId)
                .then(data => {

                    this.setState({
                        item: {
                            data
                        },
                        isLoading: false,
                        itemImg: urlImg
                    })
                }) 
                .catch(er => {
                    console.log(er)
                    this.setState({
                        isError: true,
                        isLoading: false
                    })
                })

        }

        render() {
            const {item, isError,isLoading, itemImg} = this.state
            const loadingBlock = isLoading ? <Spinner /> : null
            const errorBlock = isError ? <Error /> : null
            const viewBlock = !isError && !isLoading ? <Wrapper {...this.props} {...item} itemImg={itemImg}/> : null 

            return (
               <>
                    {loadingBlock}
                    {errorBlock}
                    {viewBlock}
               </>

            )
        }
    }
}

export default hocItem