let ingreso = document.getElementById('numero_ingresado')
let btnIngresar  = document.getElementById('btn_ingresar')
let respuesta = document.getElementById('resultado')

// Cree una función que permite dado un número n imprima la tabla de multiplicar de dicho número hasta el 12.

function tablaMultiplicar(n){
    n = parseInt(n)
    if(isNaN(n)){
        respuesta.innerHTML= 'Ingrese un número válido'
        return
    }

    let resultadoTabla = ''

    for (let i =1; i<=12;i++){
        resultadoTabla += `${n} x ${i} = ${n * i} <br>`
    }
    respuesta.innerHTML = resultadoTabla
}

btnIngresar.addEventListener('click', function(e){
    e.preventDefault()
    let valorIngresado = ingreso.value
    tablaMultiplicar(valorIngresado)
    ingreso.value = ''
    ingreso.focus()
})
