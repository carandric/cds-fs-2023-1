
export const Button = (props) => {

    const pressed = () => {
        alert("presionado");
    }

    return ( 
        // <button>Botón</button>
        <button onClick={props.onPress}>{props.name}</button>
    );
}