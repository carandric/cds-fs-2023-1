import React, {useState} from "react";
import {Button} from "./Button";


export const App = () => {
    // funciones
    // estructuras datos
    // const pets = ["bruno", "lucas", "simba"];
    
    // hooks
    //useState
    //1er. elemento es la variable
    //2do. elemento es la función que se active cuando se modifique la variable
    const [pets, setPets] = useState(["bruno", "lucas", "simba"]);
    const [inputPet, setInputPet] = useState("");

    // eventos
    const onChangeInputPet= (event) => {
        setInputPet(event.target.value);
    }

    // funciones
    const onAddPet = () => {
        // alert("agregar mascota al arreglo");
        // const newPet="odin";
        // pets.push(newPet); --> error
        // setPets([...pets, newPet]);
        setPets([...pets, inputPet]);
        setInputPet("");
    }

    return (
        // <div>
        <React.Fragment>
            <h1>hola react :)</h1>
            <Button name="Send" />
            <br/><br/>
            <Button name="Download" />
            <br/><br/>
            <input value={inputPet} onChange={onChangeInputPet} type="text" placeholder="Ingresar mascota" />
            <br/>
            <Button name="Agregar" onPress = {onAddPet}/>
            <ul>
            {
                pets.map(pet => <li>{pet}</li>)
            }
            </ul>
        </React.Fragment>
        // </div>
    )
}

/*
Crico: segmento de exportaciones públicas
*/
// Se recomienda no hacerlo así, colocar la palabra export
// en la declaración de la clase
// export default App;