// let dia = new Date()
// console.log(dia)

// if(dia == 0){
//     console.log("domingo")
// } else if(dia == 1){
//     console.log("Segunda")
// } else if(dia == 2){
//     console.log("Terça")
// } else if(dia == 3){
//     console.log("Quarta")
// } else if(dia == 4){
//     console.log("Quinta")
// } else if(dia == 5){
//     console.log("Sexta")
// } else if(dia == 6){
//     console.log("Sábado")
// } else{
//     console.log("Erro no dia")
// }

// let dia = 3;

// switch (dia){
//     case 0:
//     console.log("Domingo")
//     break;
//     case 1:
//     console.log("Segunda")
//     break;
//     case 2:
//     console.log("Terça")
//     break;
//     case 3:
//     console.log("Quarta")
//     break;
//     case 4:
//     console.log("Quinta")
//     break;
//     case 5:
//     console.log("Sexta")
//     break;
//     case 6:
//     console.log("Sábado")
//     break;
//     default:
//         console.log("Dia errado")
    
// }


//  let alunos = ["André", "Jorge", "Areclusa", "Wagner"]
//  console.log(alunos)

// let n = [7,8,9,4,5,6,1,2,3]
// console.log(n.sort())



// 1.Crie um array que receba 5 itens e exiba no console.

// 2.Utilize um método para adicionar um nome ao inicio do array.

// 3.Utilize um método para remover o último nome do array.

// 4.Utilize um método para adicionar dois nomes ao fim do array.

// 5.Utilize um método para remover o primeiro nome do array.

// 6.Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]



let frutas = ["Morango","Cereja","Laranja","Limão","Jaca"]
console.log(frutas);

frutas.unshift("Tangerina");
console.log(frutas);

let remove = frutas.pop();
console.log(frutas);

let add = frutas.push("Uva", "Pera");
console.log(frutas);

frutas.shift();
console.log(frutas);

const numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort());