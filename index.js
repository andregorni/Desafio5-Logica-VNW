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