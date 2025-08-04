let ingreso = document.getElementById('numero_ingresado')
let btnIngresar = document.getElementById('btn_ingresar')
let respuesta = document.getElementById('resultado')


// ----------------------- ejercicio 2 --------------------
// Construya una función que imprima si un número es primo
// o no. Los números primos son aquellos que son divisibles solo
// por 1 y por sí mismos. 

function encuentraPrimo(primo) {
    primo = parseInt(primo)
    if (isNaN(primo)) {
        respuesta.innerHTML = 'Debe ingresar un número'
        return
    }
    if (primo < 2) {
        respuesta.innerHTML = 'No es número primo'
        return
    }
    if (primo === 2) {
        respuesta.innerHTML = 'Es número primo'
        return
    }
    if (primo % 2 === 0) {
        respuesta.innerHTML = 'No es número primo'
        return
    }

    for (let i = 3; i <= Math.sqrt(primo); i += 2) {
        if (primo % i === 0) {
            respuesta.innerHTML = 'No es número primo'
            return
        }
    }
    respuesta.innerHTML = 'Es número primo';
}

btnIngresar.addEventListener('click', function (e) {
    e.preventDefault()
    let valorIngresado = ingreso.value
    encuentraPrimo(valorIngresado)
    ingreso.value = ''
    ingreso.focus()
})
