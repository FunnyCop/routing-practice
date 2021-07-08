const DynDisp = props => {
    if ( props.val == "Home" ) {
        return <h1>Welcome</h1>
    }

    return parseInt( props.val )
        ? <h1>The number is: { props.val }</h1>
        : <h1>The word is: { props.val }</h1>
}

export default DynDisp