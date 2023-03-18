//===================================================================

//Comentario una sola línea

/*
Comentario
multi
línea

*/
//===================================================================

// v1 : función tradicional
function sumar(numero1, numero2) {
  // var resultado = numero1+numero2;
  // const resultado = numero1+numero2;

  // console.log(resultado);

  // return resultado;
  return numero1 + numero2;
}

// sumar(3, 7)
const resultado = sumar(3, 7);

//v2: función flecha (arrow function)

const sumarFlecha1 = (numero1, numero2) => {
  ///Uso corchete para múltiples líneas
  //
  //
  //Uso corchete cuando se quiera poner RETORNO EXPLICITO
  return numero1 + numero2;
};

const sumarFlecha2 = (numero1, numero2) => (
    //Uso paréntesis cuando se quiere RETORNO IMPLICITO
    //Un solo tipo de retorno AUNQUE tenga varias lineas de código como un bloque HTML
    numero1 + numero2
)

const sumarFlecha3 = (numero1, numero2) => numero1 + numero2
