// var numeros = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(numeros.length);

// console.log(numeros[1][1])

// var eventos = {
//     trabajo: 1,
//     cafe
// }

// dias = [
//     {
//         seConvirtioEnArdilla: true,
//         dia: "lunes",
//         eventos: ["trabajo", "cafe", "tocino"]
//     },
//     {
//         seConvirtioEnArdilla: true,
//         dia: "Jueves",
//         eventos: ["descanso", "cerveza", "tocino"]
//     }
// ]

function encontrarPatron(dias) {
    eventos = {};
    for (var i = 0; i < dias.length; i++) {
      var dia = dias[i];
  
      for (var j = 0; j < dia.eventos.length; j++) {
        var evento = dia.eventos[j];
        // Valida que el atributo existe dentro del objeto -> Al devolver un valor positivo ingresa al if
        if (eventos[evento]) {
          eventos[evento]++;
        } else {
          eventos[evento] = 1;
        }
      }
    }
    console.log(eventos);
}

encontrarPatron([
    {
        convirtioArdilla: true,
        dia: "Lunes",
        eventos: ["trabajo", "tocino", "cerveza"],
    },
    {
        convirtioArdilla: true,
        dia: "Jueves",
        eventos: ["descanso", "cafe", "tocino"],
    }
])