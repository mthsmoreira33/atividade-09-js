let lessThan2500 = [];
let moreThan2500 = [];
let unemployedPeople = [];

let confirmation = true;
let person = {};

do {
    person = {
      name: prompt("Digite seu nome: "),
      age: prompt("Digite sua idade: "),
      hasJob: prompt("Você está empregado? \n [s] para sim, [n] para não"),
    };

    switch (person.hasJob.toLowerCase()) {
        case "s":
            person.wage = prompt("Qual é o seu salário?");
            if (person.wage < 2500) {
              lessThan2500.push(person);
            } else {
              moreThan2500.push(person);
            }
            break;
        case "n":
            unemployedPeople.push(person);
            break;
        default:
            console.log("Opção inválida!")
            break;
    }

    confirmation = confirm("Você deseja continuar?");

} while (confirmation);

console.log("Pessoas desempregadas: ");
for (const i of unemployedPeople) {
    console.log(`Nome: ${i.name}, Idade: ${i.age}`);
}

console.log("Pessoas com salário menor que 2500: ");
for (const i of lessThan2500) {
    console.log(`Nome: ${i.name}, Idade: ${i.age}, Salário: ${i.wage}`);
}

console.log("Pessoas com salário maior que 2500: ");
for (const i of moreThan2500) {
    console.log(`Nome: ${i.name}, Idade: ${i.age}, Salário: ${i.wage}`);
}
