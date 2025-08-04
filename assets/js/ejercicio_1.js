let ingreso = document.getElementById('numero_ingresado')
let btnIngresar = document.getElementById('btn_ingresar')
let respuesta = document.getElementById('resultado')

// ------------- Ejercicio 1 --------------------
// - Construya una función que dado un número n entero y menor que 100 calcule la sumatoria de 1 hasta n.

function sumatoria(entero) {
    if (isNaN(entero)) {
        respuesta.innerHTML = 'Debe ingresar un número'
        return
    }
    if (entero < 1) {
        respuesta.innerHTML = 'El número debe ser igual o mayor a uno'
        return
    }
    if (entero >= 100) {
        respuesta.innerHTML = 'El número debe ser menor que 100'
        return
    }

    let suma = 0
    for (let i = 1; i <= entero; i++) {
        suma += i
    }
    respuesta.innerHTML = `La sumatoria de 1 hasta ${entero} es: ${suma}`
    return suma
}

btnIngresar.addEventListener('click', function (e) {
    e.preventDefault
    let valorIngresado = ingreso.value
    sumatoria(valorIngresado)
    ingreso.value = ''
    ingreso.focus()
})


