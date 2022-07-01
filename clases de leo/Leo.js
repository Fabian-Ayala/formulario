const fai = {
    equipo: 'bok',
    profesion: 'programador',
    edad: 23,
    sabeProgramar: true,
    cambiarEquipo: function (unEquipo) { fai.equipo = unEquipo }, 
    cambiarProfesion: function (unaProfesion) { 
        fai.profesion = unaProfesion 
    }
}
// variables que cambian con el tiempo - let / var
// variables que no cambian con el tiempo - const
function gritoDeGol(unEquipo) {
    const equipito = unEquipo + 'ito'
    let equipitos = equipito + 's'
    equipitos = equipitos.toLowerCase()
    console.log('GOOOOL VAMOS ' + equipitos)
}
function equiposArgentinos() {
    let array = ['Boca', 'River',  'San Lorenzo']
    return array
}

console.log(equiposArgentinos());

function sumar(numero1, numero2) {
    return numero1 + numero2
};

console.log(sumar(5, 6))

function estaDurmiendo() {
    return fai.profesion == null;
}
// console.log(gritoDeGol('BOCA'))
// console.log(gritoDeGol('RIVER'))
// console.log(gritoDeGol('SAN LORENZO'))
// console.log(estaDurmiendo())
// console.log(sumar(5, 8))