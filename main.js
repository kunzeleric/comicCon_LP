
const ingressos = []
const ingressosDias = []

//Recebe o seletor (id dos cards) e adiciona a classe "card-highlight" para modificar a sombra
function highlightCard(selector) {
    let element = document.getElementById(selector)
    element.classList.toggle("card-highlight")
}

function highlightButton() {
    let element = document.querySelector('#purch-button')
    element.classList.toggle("button-highlight")
}

// Recebe o seletor (cards de ingresso) e adiciona informação em um array para posteriormente mostrar os ingressos selecionados
// Com um click, ou adiciona ou remove o elemento, dependendo se está dentro do array ou não.
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
        ingressos.push(element.alt) // Adiciona um elemento novo para o array ingressos
        element.classList.toggle('card-selected')
    }
}

// Mostra os ingressos selecionados
showSelectedCards = () => {
    if (ingressos.length > 0) {
        alert("Ingressos selecionados: " + ingressos)
    }
}

addKeyboardEventListeners()