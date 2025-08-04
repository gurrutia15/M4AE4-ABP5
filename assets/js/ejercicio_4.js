let ingreso = document.getElementById('numero_ingresado')
let btnIngresar = document.getElementById('btn_ingresar')
let respuesta = document.getElementById('resultado')

// ---------- Ejercicio 4 -----------------
// Construya una función que dado un número n entero mayor que 10 y menor que 1000 calcule la sumatoria de todos los números pares contenidos en el rango

function sumatoriaPares(n) {
    n = parseInt(n)
    if (isNaN(n)) {
        respuesta.innerHTML = 'Ingrese un número válido'
        return
    }
    if (n <= 10) {
        respuesta.innerHTML = 'El número debe ser mayor a 10'
        return
    }
    if (n >= 1000) {
        respuesta.innerHTML = 'El número debe ser menor a 1000'
        return
    }
    let suma = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            suma += i
        }
    }

    respuesta.innerHTML = `Sumatoria de pares es: ${suma}`
}

btnIngresar.addEventListener('click', function (e) {
    e.preventDefault()
    let valorIngresado = ingreso.value
    sumatoriaPares(valorIngresado)
    ingreso.value = ''
    ingreso.focus()
})
