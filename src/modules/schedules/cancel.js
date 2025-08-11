const period = document.querySelectorAll(".period")


// Gera evento click para cada lista (manhã, tarde e noite)
periods.forEach((periods) => {
    // Captura o evento de click na lista.
    period.addEventListener("click", (event) => {
        if (event.target.classList.contains("cancel-icon")){
            // Obtém a li pai do elemento clicado.
            const item = event.target.closest("li")
            const { id } = item.dataset

            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?")
            }
            if(isConfirm){
                
            }
        }
    })
})