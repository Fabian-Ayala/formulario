// const displayResultadoAnterior = document.querySelector(".resultado_anterior");
// const displayResultadoActual = document.querySelector(".resultado_actual");
// const botonesNumeros = document.querySelectorAll(".numeros");
// const botonesOperdores = document.querySelectorAll(".operadores");
//que la calculadora sirva solo para numeros enteros
//que haga solo una operacion, deben funcionar todas pero en un calculo solo debe funcionar unaa la vez
//limitar que solo se pueda hacer una operacion


const boton1 = document.querySelector(".bot1");
const boton2 = document.querySelector(".bot2");
const boton3 = document.querySelector(".bot3");
const boton4 = document.querySelector(".bot4");
const boton5 = document.querySelector(".bot5");
const boton6 = document.querySelector(".bot6");
const boton7 = document.querySelector(".bot7");
const boton8 = document.querySelector(".bot8");
const boton9 = document.querySelector(".bot9");
const boton0 = document.querySelector(".bot0");
const botonPunto = document.querySelector(".botPunto");

const botonSuma = document.querySelector(".botSuma");
const botonResta = document.querySelector(".botResta");
const botonMulti = document.querySelector(".botMulti");
const botonDiv = document.querySelector(".botDiv");
const botonIgual = document.querySelector(".botIgual");

const resActual = document.querySelector(".resultado_actual");
boton1.addEventListener("click", () => {
        resActual.textContent = resActual.textContent + "1"
})
boton2.addEventListener("click", () => {
    resActual.textContent = resActual.textContent + "2"
})
boton3.addEventListener("click", () => {
    resActual.textContent = resActual.textContent + "3"
})
boton4.addEventListener("click", () => {
     resActual.textContent = resActual.textContent + "4" 
})
boton5.addEventListener("click", () => {
     resActual.textContent = resActual.textContent + "5"   
})
boton6.addEventListener("click", () => {
     resActual.textContent = resActual.textContent + "6"   
})
boton7.addEventListener("click", () => {
     resActual.textContent = resActual.textContent + "7"   
})
boton8.addEventListener("click", () => {
     resActual.textContent = resActual.textContent + "8"   
})
boton9.addEventListener("click", () => {
     resActual.textContent = resActual.textContent + "9"   
})
boton0.addEventListener("click", () => {
     resActual.textContent = resActual.textContent + "0"   
})
botonPunto.addEventListener("click", () => {
     resActual.textContent = resActual.textContent + "."   
})


botonSuma.addEventListener("click", () => {
      resActual.textContent = resActual.textContent + "+"
})
botonResta.addEventListener("click", () => {
      resActual.textContent = resActual.textContent + "-"  
})
botonDiv.addEventListener("click", () => {
      resActual.textContent = resActual.textContent + "/"  
})
botonMulti.addEventListener("click", () => {
      resActual.textContent = resActual.textContent + "*"  
})
botonIgual.addEventListener("click", () => {
    const pepitoS = resActual.textContent.split("+")
    const pepitoR = resActual.textContent.split("-")
    const pepitoM = resActual.textContent.split("*")
    const pepitoD = resActual.textContent.split("/")
    // console.log(pepitoS)
    // console.log(pepitoR) 
    // console.log(pepitoM)
    // console.log(pepitoD)
    const operacionSuma = pepitoS.map((stringNumero) => {
                return parseInt(stringNumero)
    })
    console.log(operacionSuma)
    debugger;resActual.textContent = sumar(operacionSuma[0], operacionSuma[1])
    
    const operacionResta = pepitoR.map((stringNumero) => {
        return parseInt(stringNumero)
})
    console.log(operacionResta)
    resActual.textContent = restar(operacionResta[0], operacionResta[1])
})



function sumar(num1, num2){
   return(num1 + num2)
}
function restar(num1, num2){
    return(num1 - num2)
}
function multiplicar(num1, num2){
    return(num1 * num2)
}
function dividir(num1, num2){
    return(num1 / num2)
}
