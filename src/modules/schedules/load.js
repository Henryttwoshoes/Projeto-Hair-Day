import { scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data.
const selectedDate = document.getElementById("date")


export async function schedulesDay(){
    // Busca na API os agendamentos para carregar do lado direito da tela
    // Renderiza as horas disponíveis.

    //Obtém a data do input
    const date = selectedDate.value

    // Busca na API os agendamentos
    const DailySchedules = await scheduleFetchByDay({ date })
    console.log(DailySchedules)



    hoursLoad({date}); // Adicione esta linha

    // Os horários disponíveis (horário futuro + não agendado) no lado esquerdo (form)

}