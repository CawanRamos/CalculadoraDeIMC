//Importando
import {AlertError} from './alert-error.js'
import{CalulateIMC, displayResultMessage, notANumber} from './utils.js'

//Variáveis da minha tela principal
const form = document.querySelector('form') 
export const inputWeigth = document.querySelector('#weigth') //Pegando meu input peso
export const inputHeight = document.querySelector('#height') //Peguando meu input de altura

form.onsubmit = event => {//função que será execultada quando eu clicar no botão de submit
    //Evitando meu reinicio
    event.preventDefault() //Evite o comportamento padrão

    //Pegando meus valores

    const weigth = inputWeigth.value
    const heigtht = inputHeight.value

    const showAlertError = notANumber(weigth) || notANumber(heigtht)

    if(showAlertError){
        AlertError.open()
        return
    }

    AlertError.close()

    const result = CalulateIMC(weigth, heigtht)

    displayResultMessage(result)
    
} 

inputWeigth.oninput = () => AlertError.close() //Percebe se estou alterando algo no meu ipunt
inputHeight.oninput = () => AlertError.close()
