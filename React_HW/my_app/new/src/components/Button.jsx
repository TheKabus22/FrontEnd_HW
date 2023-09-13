const Button = (props) => {
    const sayHi = () => console.log('Good news, everyone!')
    return (
        < button onClick={sayHi}>{props.text} </button >
    )
}

export default Button;