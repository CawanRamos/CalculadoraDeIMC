import {Modal} from './modal.js'

export function CalulateIMC(weigth, heigtht) { //Função que calcula o IMC
    return (weigth / ((heigtht / 100) ** 2)).toFixed(2)
}

export function nivelIMC(result){ //Função que mostra em que nivel o usuário se encontra
    if ( result < 18.5) {
        Modal.message2.innerText = "Seu peso está abaixo do normal"
        Modal.message3.innerText = "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso."
    } else if ( result >= 18.5 &&  result <= 24.99){
        Modal.message2.innerText = "Seu peso está normal"
        Modal.message3.innerText = "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada"
    } else if (result >= 25 &&  result <=29.99){
        Modal.message2.innerText = "Você está com sobrepeso"
        Modal.message3.innerText = "Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer."
    } else if ( result >= 30 &&  result <= 34.99) {
        Modal.message2.innerText = "Você está com obesidade grau I"
        Modal.message3.innerText = "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista."
    }  else if ( result >= 35 &&  result <= 39.99) {
        Modal.message2.innerText = "Você está com obesidade grau II"
        Modal.message3.innerText = "Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde."
    } else if ( result >= 40){
        Modal.message2.innerText = "Você está com obesidade grau III"
        Modal.message3.innerText = "Aqui o sinal é vermelho, com forte probabilidade de já eodalMessagexistirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente."
    }
}

export function notANumber (value) { //Para validar se são números
    return isNaN(value) || value == '' || value < 0
}

export function displayResultMessage(result) {
    const message = "Seu IMC é de " + result

    Modal.message1.innerText = message

    nivelIMC(result)
   
    Modal.open()
}

