let ingreso = document.getElementById('numero_ingresado')
let btnIngresar  = document.getElementById('btn_ingresar')
let respuesta = document.getElementById('resultado')

// ------------------ Ejercicio 3 --------------
// Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiva, es decir si n es 5 deberá imprimir 5,4,3,2,1. 


function cuentaRegresiva(entero){
    entero = parseInt(entero)
    if(isNaN(entero)){
        respuesta.innerHTML = 'Ingrese un número válido'
        return
    }
    if(entero <= 0){
        respuesta.innerHTML = 'Debe ser un número positivo'
        return
    }
    if (entero >=100){
        respuesta.innerHTML = 'El número debe ser menor a 100'
        return
    }

    let cuenta = []
    for(let i = entero; i >=1;i--){
        cuenta.push(i)
    }
    respuesta.innerHTML = `Cuenta regresiva: ${cuenta.join(', ')}`
}


btnIngresar.addEventListener('click', function(e){
    e.preventDefault()
    let valorIngresado = ingreso.value
    cuentaRegresiva(valorIngresado)
    ingreso.value = ''
    ingreso.focus()
})
