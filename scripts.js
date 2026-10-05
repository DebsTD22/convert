// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipula o input amount para receber somente numeros
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "") 
})

// Captura o evento de submit do formulario 
form.onsubmit = (event) => {
    event.preventDefault()

    // Identifica a moeda selecionada
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP": 
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Converte a moeda
function convertCurrency(amount, price, symbol) {
    
}
