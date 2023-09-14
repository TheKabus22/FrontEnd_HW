const Button = (props) => {
    
    return (
        < button onClick={props.sayHi}>{props.text} </button >
    )
}
export default Button;