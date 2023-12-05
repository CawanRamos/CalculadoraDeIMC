import {inputWeigth, inputHeight} from './script.js'

export const Modal = { //Objeto literal que some e aparece com meu modal e chama minhas váriaveis do Modal

    wrapper:  document.querySelector('.modal-wrapper'),
    message1: document.querySelector('.modal .title span'),
    message2: document.querySelector('.modal h3'),
    message3: document.querySelector('.modal p'),
    btnClose: document.querySelector('.close'),


    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}


Modal.btnClose.onclick = () => { //Botão para fechar o modal
    Modal.close()
    inputWeigth.value = ""
    inputHeight.value =""

}

window.addEventListener('keydown', event => { //Fecha o meu modal com teclado
    if(event.key == 'Escape'){
        Modal.close()
        inputWeigth.value = ""
        inputHeight.value = ""
    }
}) 