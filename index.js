function calcular(vitorias, derrotas) {
let saldoVitorias = (vitorias - derrotas)

let nivel = ""


if (vitorias < 10) {
    nivel ="Ferro"
} else if (vitorias >= 10 && vitorias <= 20) {
   nivel = "Bronze"
} else if (vitorias > 20 && saldoVitorias <= 50) {
    nivel ="Prata"
} else if (vitorias > 50 && vitorias <= 80){
    nivel ="Ouro"
} else if (vitorias > 80 && vitorias <= 90) {
    nivel ="Diamante"
} else if (vitorias > 90 && vitorias <= 100) {
    nivel ="Lendário"
} else {
    nivel ="Imortal"
}
return {saldoVitorias, nivel}

}
//exemplo:
let vitorias = 20;
let derrotas = 10;
let resultado = calcular(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`)