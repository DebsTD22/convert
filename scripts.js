// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

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
    try{
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula total
        let total = amount * price

        // Exibe resultado total
        result.textContent = total

        // Aplica a classe que exibe o footer
        footer.classList.add("show-result")
    } catch (error){
        // Remove a classe que exibe o footer
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter")
    }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}