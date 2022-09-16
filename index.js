//SEMANA 2

//Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array.


//Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui.

// CRUZEIROS 

// const cruzeiro1 = ("MSC Seashore - Nordeste")
// const preco1 = 5500
// const internacional1 = false
// const localidades1 = ["Santos", "Ilha Grande", "Salvador", "Búzios"]

// const cruzeiro2 = ("MSC Fantasia - Argentina, Uruguai")
// const preco2 = 7000
// const internacional2 = true
// const localidades2 = ["Santos", "Ponta Del Este", "Montevideú", "Buenos Aires"]

// const cruzeiro3 = ("MSC Splendida - Oriente Médio & Mar Vermelho")
// const preco3 = 13000
// const internacional3 = true
// const localidades3 = ["Rio de Janeiro", "Cairo", "Arábia Saudita", "Egito"]

// console.log(cruzeiro1.toUpperCase())
// console.log(`Preco: ${preco1}`)
// console.log(`É Internacional? ${internacional1}`)
// console.log(`Destinos: ${localidades1}`)

// console.log(cruzeiro2.toUpperCase())
// console.log(`Preco: ${preco2}`)
// console.log(`É Internacional? ${internacional2}`)
// console.log(`Destinos: ${localidades2}`)

// console.log(cruzeiro3.toUpperCase())
// console.log(`Preco: ${preco3}`)
// console.log(`É Internacional? ${internacional3}`)
// console.log(`Destinos: ${localidades3}`)

// SEMANA 2

// 1. Transforme os itens que criamos nas últimas semanas em objetos.
// 2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
// 3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()


const cruzeiros = [
    {
        nome: `MSC Seashore - Nordeste`,
        valor: 5500,
        internacional: false,
        destinos: [
            `Santos`,
            `Ilha Grande`,
            `Salvador`,
            `Buzios`
        ],
    },
    {
        nome: `MSC Fantasia - Argentina, Uruguai`,
        valor: 7000,
        internacional: true,
        destinos: [
            `Santos`,
            `Ponta Del Este`,
            `Montevideú`,
            `Buenos Aires`
        ],
    },
    {
        nome: `MSC Splendida - Oriente Médio & Mar Vermelho`,
        valor: 13000,
        internacional: true,
        destinos: [
            `Rio de Janeiro`,
            `Cairo`,
            `Arábia Saudita`,
            `Egito`
        ],
    },
]
console.log(cruzeiros)