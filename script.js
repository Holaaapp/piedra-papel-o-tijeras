function jugar(opcionUsuario){
    const opciones = ['piedra', 'papel', 'tijeras']
    const opcionesMaquina = opciones[Math.floor(Math.random() *3)]

let result;

    if (opcionUsuario === opcionesMaquina){
        result = 'Un empate'
    } else if ((opcionUsuario === 'tijeras' && opcionesMaquina === 'papel') || (opcionUsuario === 'papel' && opcionesMaquina === 'piedra') || (opcionUsuario === 'piedra' && opcionesMaquina === 'tijeras') )   {
        result ='Ganaste, maquina noob'
    } else {
        result = 'Perdiste, normalmente te aparecera esto, no hay truco lo juro'
    }
    document.getElementById('juan').innerText = `Elegiste ${opcionUsuario}. Tu oponente elegio ${opcionesMaquina}. ${result}`
const color = document.getElementById('juan')
if(result === 'Un empate'){
    color.style.color = "darkblue"
} else if (result === 'Ganaste, maquina noob'){
    color.style.color = "green"
} else{
    color.style.color = "red"
}
} 