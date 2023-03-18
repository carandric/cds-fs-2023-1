

# Ejercicio 5: Escribir pseudocódigo que muestre la suma de los primeros 10 números impares

Inicio

### Inicie el número, contador de numeros impares, el total de números, la suma total
numero = 1
contador_numeros_impares = 0
total_numeros = 10
suma = 0

### Itere desde el contador hasta el total de número aumentando de a uno
mientras contador_numeros_impares <= total_numeros haga

  ### calcule la operación módulo entre el número y 2 y si el resultado es mayor cero, aumente la suma por el valor del número y aumente el contador de números
  si numero módulo 2 es mayor a cero entonces
    suma = suma + numero
    contador_numeros_impares = contador_numeros_impares + 1
  fin si

  ### aumente el número en uno
  numero = numero + 1

fin mientras 

### Imprima la suma
imprima "La suma de los primeros 10 números impares ", suma

Fin