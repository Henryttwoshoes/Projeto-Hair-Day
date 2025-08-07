import dayjs from "dayjs"

const form = document.querySelector("form")
const selecteDate = document.getElementById("date")

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como sendo a data atual.
selecteDate.value = inputToday
selecteDate.min = inputToday

form.onsubmit = (event) => {
    // Previne o comportamento padrão de carregar a página.
    event.preventDefault()
    console.log("ENVIADO!")
}