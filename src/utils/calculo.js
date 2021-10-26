/**
 * @param {number} quantPessoas
 * @param {number} quantAtendentes
 * @param {number} mediaTempo
 * @return {object} {description, tempo} tempo sempre em minutos.
 */
const calculo = (quantPessoas, quantAtendentes, mediaTempo) => {
    const tempo = ((quantPessoas / quantAtendentes) * mediaTempo)
    let horas = 0;
    let minutos = 0;
    let segundos = 0;

    for (let i = 0; i <= tempo * 60; i++) {
        segundos++;
        if(segundos == 60) {
            minutos++;
            segundos = 0;
        }
        if(minutos == 60){
            minutos = 0;
            horas++;
        }
    }

    let objeto = {
        horas,
        minutos, 
        segundos
    }

    return objeto;
}

export default calculo;