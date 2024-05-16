let nome = ""
let idade = 0
let altura = 0 
let peso = 0 

//
nome = prompt("qual o seu nome?")
idade = parseInt(prompt("digite sua idade"))
altura = parseFloat(prompt("digite sua altura"))
peso = parseInt(prompt("digite seu peso"))
//

let AnoDeNascimento = 0 
AnoDeNascimento = 2024 - idade

//
let IMC = 0
IMC = peso / (altura * altura)

//

console.log("Olá " + nome +", você tem" + idade +  " anos, nasceu em" + AnoDeNascimento + ", tem" + altura + ", pesa" + peso + "kg seu IMC é"+ IMC + "kg/m2")