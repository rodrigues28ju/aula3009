//números

var idade = 27;
var gols = 37;
var pi = 3.14; // . para decimal
var expo = 2e10; 
/* o e acrescenta uma determinada quantia de zero ao lado do numero ,
 e10 acrescenta dez zero */

console.log(idade,gols,pi,expo);



// operadores aritimétricos

var  soma = 100 + 50;
var subtraçao = 100 - 50;
var multiplicacao = 100 * 50;
var divisao = 100 / 2;
var expoente = 2 ** 4 ;
var modulo = 14 % 5 ; 

/* 4 e o resto que sobra , ou seja dividir 10/5 = 2. ja 4 nao e divisivel por 5  entao 4 e o restante .*/

console.log(soma,subtraçao,multiplicacao,divisao,expoente,modulo);


// operadores arimétricos (strings) --  números entre ' '

var soma = '100' + 50; 
/* resultado 10050  
o 100 se tornou uma string por esta dentro   '' e por ser soma  
lembrando que o + em ' strigs , serve para concatenar . */


var subtraçao = '100' - 30; 
/*  resultado = 70
nesse caso , o console força a substração , pois nao existe e substraçao de string. */



var multiplicacao = '100' * '2';
/* resultado 200
também , o console força a multiplicação , pois não existe a multipliação de string */

var divisao = 'comprei 10' /2;
/*Nan not a Number -- não é um número 
pois a palavra comprei ,nao converte em número . se for só 10 , compila */

console.log(soma,subtraçao,multiplicacao,divisao);


//NaN = Not A Number

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade ; // 80kg
var pesoPorDois = peso / 2;
/*NaN (not a number), pois 'kg' é uma string */

console.log(pesoPorDois);


// a ordem importa 
/*começa por multiplicaçao e divisao , depois soma e substraçao e diferente quando esta isolado por () 
nas espressoes que contenha a divisao e mutiplicaçao a conta e feita por o que aparecer na frente */

var total1 = 20 + 5 * 2; // 30
var total2 = (20+5) * 2; //50
var total3 = 20 / 2 * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2 ; // 40

console.log(total1,total2,total3,total4);


//operadores aritmeticos unarios , so presisa de um numero

var incrimento = 5;
console.log(incrimento++);//5
console.log(incrimento)//6

var incrimento2 = 5;
console.log (++incrimento2);//6
console.log(incrimento2) // 6