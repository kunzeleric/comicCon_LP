
const ingressos = []
const ingressosDias = []

//Função para deixar as imagens dos ingressos com bordas vermelhas.
function addRedBorder(id) {
    let element = document.querySelector(`#${id}`)
    element.style.border = "5px solid red"
}

//função que recebe o seletor (id dos cards) e adiciona a classe "card-highlight" para modificar a sombra
function highlightCard(selector) {
    let element = document.getElementById(selector)
    element.classList.toggle("card-highlight")
}

function highlightButton() {
    let element = document.querySelector('#purch-button')
    element.classList.toggle("button-highlight")
}

// função que retorna um alerta para cada tecla pressionada
function checkKeyboardCode() {
    document.addEventListener('keydown', (event) => {

        var name = event.key
        var code = event.code
        //Alert the key name and key code on keydown
        alert(`Tecla pressionada ${name}\r\n Key code: ${code}`)
    }, false)
}

//checkKeyboardCode()


//função criada para adicionar uma classe às tags das imagens dos ingressos para destacar de acordo com a tecla apertada
addKeyboardEventListeners = () => {
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById('quinta')
        var ingresso2 = document.getElementById('sexta')
        var ingresso3 = document.getElementById('sabado')
        var ingresso4 = document.getElementById('domingo')

        var code = event.code
        //se a tecla apertada for 1
        if (code == 'Digit1') {
            ingresso1.classList.toggle("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        //se a tecla apertada for 2
        if (code == 'Digit2') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.toggle("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        //se a tecla apertada for 3
        if (code == 'Digit3') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.toggle("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        //se a tecla apertada for 4
        if (code == 'Digit4') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.toggle("card-highlight")
        }

    }, false)
}

// função que recebe o seletor (cards de ingresso) e adiciona informação em um array para posteriormente mostrar os ingressos selecionados
// clica uma vez, armazena o ingresso. clica duas vezes, o ingresso é removido do array.
selectCard = (selector) => {
    var element = document.querySelector(selector)
        
    if(element.alt === "Sabado"){
        alert("Ingresso de sábado está esgotado.")
        element.classList.remove('card-selected')
        exit
    }

    if (ingressos.includes(element.alt)) {
        let indice = ingressos.indexOf(element.alt)
        element.classList.toggle('card-selected')
        ingressos.splice(indice, 1)
    }
    else {
        ingressos.push(element.alt) // "empurra" um elemento novo para o array ingressos
        element.classList.toggle('card-selected')
    }



}

// função ARROW sem parâmetros que mostra os ingressos selecionados
showSelectedCards = () => {
    if (ingressos.length > 0) {
        alert("Ingressos selecionados: " + ingressos)
    }
}

addKeyboardEventListeners()