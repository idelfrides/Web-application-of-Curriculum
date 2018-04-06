console.log("\n\n Hello World! \n My name is War Machine\n\n");
console.log(x);
var x;
//let y;
x = Number("50.70");
nome = "obama";
z = 18.97;

/*
TIPOS
- number
- string
- boolean
- array
- object

*/
const N = 1000;

console.log(x);
console.log(nome);
console.log(z);
console.log(N);
console.log("--------------------");
console.log(typeof(x));
console.log(typeof nome);
console.log(typeof z);
console.log(typeof  N);

for (var w = 1; w <= 5; w++){
    console.log(w);
}

eh = Number.isInteger(nome);
console.log(eh);
console.log(Number.isInteger(x));

console.log("--------------------------------------------");

var p1, p2;
var n1 = 2;
var n2 = 1;
p1 = 4;
p2 = 5;

const  total = n1*p1 + n2*p2;
const media = total/(p1 + p2);

console.log("\n Total: ",total,"\n", "Media: ", media);

console.log("\n Media curta: ", media.toFixed(3));

//CUIDADOS
console.log(10/0);
console.log("10" / 2);
console.log("4" + 2);
console.log("TecWeb!" * 2);
console.log((10).toString());
console.log(0.1 + 0.7);

//STRINGS
console.log("-----------------------------");
const disc = "Tecnologias Web";
console.log(disc.charAt(12));
console.log(disc.charAt(13));
console.log(disc.charAt(14));
console.log(disc.substring(0, 11));
console.log(disc.substring(12));

valor = "10, 98";
console.log(valor);
valor = valor.replace(",", ";");
console.log(valor);

var name = "Will Smith  ";
//name == "Will 2Smith";
console.log(name);
name2 = name.toUpperCase();
console.log(name2);

// STRING - Tamplates

const nom = "War";
const sobrenome = "Machine";
const  nomeCompleto = nom + ' ' + sobrenome;
var saudacao = 'Olá, ' + nomeCompleto + '!';

console.log(saudacao);
const template = "E aí, ${nomeCompleto}, Como vai?";
console.log(template);
//expressões
console.log('1 + 1 = ${1 + 1}');

// TIPO BOLEANO

console.log(!!3);
console.log(!!-1);
console.log(!!' ');  // espaço vazio
console.log(!![]);  // array vazio
console.log(!!{});  // objeto literal

console.log(!!0);
console.log(!!''); // string vazia
console.log(!!null);
console.log(!!NaN);

//----------- TIPO ARRAYS

vetor = [7.8, 8, 9, 10];
console.log(vetor);
console.log(vetor[2]);
console.log(vetor.length);
vetor.push(47, "teste", [2, 3]);
console.log(vetor);
vetor.pop();   // remove o último elemento
vetor.pop();
vetor.reverse();
console.log(vetor);
//console.log(vetor.some());
//delete vetor[1];

// OBJECT

console.log("-------------------------------------");
const  obj = {};
obj.name = "WM";
obj.valor = 100000;
obj.cidade = "Sobral";
obj.signo = 'Escorpion';
obj.jogador = 'CR7';
obj.altura = 1.80;
console.log(obj);

// FUNÇÃO

console.log("----------------------\n Funçao\n -------------------------------");
// #1 - sem retorno
//imprimeSoma(5, 5);   // aqui funciona
function imprimeSoma(a, b) {
    console.log(a + b);
}
imprimeSoma(4, 15);   // aqui funciona também
imprimeSoma();   // aqui funciona também
imprimeSoma(7);   // aqui funciona também
imprimeSoma(7, 3,  9, 8);   // aqui funciona também

// #2 - com retorno
function soma(x, y) {
    return x + y;
}

console.log(soma(7, 8));
console.log(soma());
console.log(soma(5));
console.log(soma(5, 1, 2, 3));

// armazenando uma função em uma variavel - const
// função anônima

const imprimirSoma = function (a, b) {
    console.log(a + b);
};

imprimirSoma(9, 9);

//Armazenando uma função arrow em uma variável / constante

/*
var soma = (c, d) => {
    return c + d;
}; */

