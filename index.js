// Comida - Risoto de Frutos do Mar

// * Nome; - Risoto do Mar

// * Descrição; 
     //FRUTOS DO MAR
    // 1 - Cozinhar o polvo na panela de pressão por 4 minutos com água e sal.
    // 2 - Cortar em cubos e reservar.
    // 3 -  Limpar o camarão e temperar com sal e pimenta.
    // 4 -  Temperar o mexilhão e os anéis de lula.
    // 5 -  Refogar separadamente os frutos do mar (camarão, mexilhão e lula) em frigideira bem quente com fio de azeite de oliva.
    // 6 -  Reservar.

     //RISOTO
    //  1 -Em uma panela aquecer 50 g de manteiga, fritar a cebola sem dourar.
    //  2 -Acrescentar o arroz, fritar por alguns minutos.
    //  3 -Juntar o vinho e colocar o sal.
    //  4 -Quando o vinho evaporar, adicionar o caldo fervente, até cobrir a superfície do arroz, sempre mexendo.
    //  5  -Repetir esta operação até o arroz ficar ao dente (quase cozido).
    //  6 -Retirar do fogo e acrescentar os frutos do mar reservados, o molho vermelho e a manteiga.

// * Ingredientes;
// 1- 500 g de arroz italiano (arbóreo ou carnaroli)
// 2- 400 g de polvo
// 3- 200 g de camarão médio
// 4- 150 g de mexilhão sem casca
// 5- 200 g de lula em aneis
// 6- 1 unidade de cebola (picada) média
// 7- 200 ml de vinho branco seco
// 8- 2 l de caldo de legumes
// 9- 5 g de sal 
// 10- azeite
// 11- 100 g de manteiga
// 12- 1 xícara de molho vermelho


// * Preço; $120,00

// * Categoria (entrada, prato principal, sobremesa etc); 
//Prato Principal

// * É vegetariano?; False




// Comida - Risoto

//1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.

const nome =("Risoto do Mar")

const descricão =("FRUTOS DO MAR:\n1 - Cozinhar o polvo na panela de pressão por 4 minutos com água e sal.\n2 - Cortar em cubos e reservar.\n3 -  Limpar o camarão e temperar com sal e pimenta.\n4 -  Temperar o mexilhão e os anéis de lula.\n5 -  Refogar separadamente os frutos do mar (camarão, mexilhão e lula) em frigideira bem quente com fio de azeite de oliva.\n6 -  Reservar.\nRISOTO:\n1 -Em uma panela aquecer 50 g de manteiga, fritar a cebola sem dourar.\n2 -Acrescentar o arroz, fritar por alguns minutos.\n3 -Juntar o vinho e colocar o sal.\n4 -Quando o vinho evaporar, adicionar o caldo fervente, até cobrir a superfície do arroz, sempre mexendo.\n5  -Repetir esta operação até o arroz ficar ao dente (quase cozido).\n6 -Retirar do fogo e acrescentar os frutos do mar reservados, o molho vermelho e a manteiga.")

const ingredientes =("500 g de arroz italiano (arbóreo ou carnaroli, 400 g de polvo, 200 g de camarão médio, 150 g de mexilhão sem casca, 200 g de lula em aneis, 1 unidade de cebola (picada) média, 200 ml de vinho branco seco, 2 l de caldo de legumes, 5 g de sal, azeite, 100 g de manteiga, 1 xícara de molho vermelho")

const preco = 120

const categoria =("Prato principal")

const vegetariano = false

console.log(`NOME: ${nome}`)
console.log(`DESCRICÃO: ${descricão}`)
console.log(`INGREDIENTES: ${ingredientes}`)
console.log(`PRECO: ${preco}`)
console.log(`CATEGORIA: ${categoria}`)
console.log(`É VEGETARIANO? ${vegetariano}`)



//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const nome1 = ("Risoto Vegetariano")
const preco1 = 150 
const vegeteriano1 = true

const nome2 = ("Risoto De Camarao")
const preco2 = 200
const vegeteriano2 = false

const nome3 = ("Risoto De Carangueijo")
const preco3 = 130
const vegeteriano3 = false


//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const mediaPreco = (150+200+130)/3
console.log(`A média dos preços: ${mediaPreco}
`)

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const alimentarVege = vegeteriano1 && vegeteriano2 && vegeteriano3
console.log(alimentarVege)