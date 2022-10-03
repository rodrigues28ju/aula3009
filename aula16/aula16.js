var frase = 'isso é um teste';
+frase; // Nan
-frase; //Nan
console.log(+frase +5);// NaN
//String não é possivel converter em número ,por isso o NaN
console.log(-frase -5); // NaN
//String não é possivel converter em número ,por isso o NaN
var idade = '28';
+idade; //28 número
-idade; // -28 

console.log (+idade + 5 ); // 33
//mesmo com 28 em string '' . o operador consegue exercutar a soma , por ser valor 

consol.log (+idade - 5 ); // 23
//mesmo com 28 em string '' . o oprtador consegue exercutar a substraço , por numerico


var possuiFaculdade=true;
console.log(+possuiFaculdade); //1

