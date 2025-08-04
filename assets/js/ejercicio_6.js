let ingreso = document.getElementById('numero_ingresado')
let btnIngresar = document.getElementById('btn_ingresar')
let respuesta = document.getElementById('resultado')

function ordenarArreglo(n) {
    let arregloDesordenado = n.split(',')
        .map(item => item.trim())
        .filter(item => item !== '')
        .map(item => parseInt(item))

    if (arregloDesordenado.length === 0) {
        respuesta.innerHTML = 'Debe ingresar al menos un número'
    }
    if (arregloDesordenado.some(isNaN)) {
        respuesta.innerHTML = 'Al menos uno de los valores es inválido'
        return
    }



    let ordenado = arregloDesordenado.sort((a, b) => a - b)
    respuesta.innerHTML = `Los números ordenados de manera ascendente: ${ordenado.join(', ')}`
}

btnIngresar.addEventListener('click', function (e) {
    e.preventDefault()
    let valorIngresado = ingreso.value
    ordenarArreglo(valorIngresado)
    ingreso.value = ''
    ingreso.focus()
})
