const composer = (fn) => (Wrapper) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {fn}
            </Wrapper>
        )
    }
}

export default composer