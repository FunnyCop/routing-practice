const Hello = props => {
    const style = {
        color : props.color,
        backgroundColor : props.backgroundColor
    }

    return (
        <div className = "Hello">
            <h1 style = { style }>The word is: { props.word }</h1>
        </div>
    )
}

export default Hello