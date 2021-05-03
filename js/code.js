console.log('Ejercicio 1');
console.log("");
console.log("Hola mundo");
console.log("");

console.log('Ejercicio 2');
console.log("");
alert('!Me llamo Alexys¡');
console.log("");

console.log('Ejercicio 3');
console.log("");
var nombre = 'Alexys';
var apellido = 'Martinez';
console.log(nombre+ ' ' + apellido);
console.log("");

console.log('Ejercicio 4');
console.log("");
var num1 = 34;
var num2 = 56;
var resultado = num1 + num2;
console.log('La suma entre ' + num1 + ' y ' + num2 +' es ' +  resultado);
console.log("");

console.log('Ejercicio 5');
console.log("");
var nota = 4.6;
if (nota <=  5) {
    alert('Ohh has suspendido el examen con un, ' + nota);
} else {
    alert('Has superado el examen con un, ' + nota);
}
console.log("");

console.log('Ejercicio 6-a');
console.log("");
var frase = "Tinc un cotxe de color verd";
frase = frase.replace("verd","blau");
alert(frase);
console.log("");

console.log('Ejercicio 6-b');
console.log("");
var frase = "Tinc un cotxe de color verd";
frase3 = frase.replace(/[o]/gi,'u');
alert(frase3);
console.log("");

console.log('Ejercicio 7');
console.log("");
var objetos = [ 'mesa', 'silla', 'ordenador', 'libreta' ];
for (let i = 0; i < objetos.length; i++) {
    console.log('El objeto ' + objetos[i] + ' esta en la posicion ' + i + '.');  
}
console.log(""); 

 /* nivel 3 */
console.log('Ejercicio 8');
console.log("");
var resultado = '0'; 
var valor1 ; 
var valor2 ; 
var operador  = '';


var flag = false;

function borrar() {
    document.getElementById("number-box").value="0";
    valor1=undefined;
    valor2=undefined;
}

function operadores(valorOperdores) {
    operador = valorOperdores; 
        valor1 = document.getElementById("number-box").value;
        console.log(valor1)
        document.getElementById("number-box").value='0';
        return valor1;
}



function calculadora(operador ,valor1 , valor2){
        
        valor1=parseFloat(valor1);  
        valor2=parseFloat(document.getElementById("number-box").value);  
    if (valor1!=NaN) {
        switch (operador) {
        case '+':
            resultado = valor1 + valor2 ;
            document.getElementById("number-box").value= resultado;
        break;
        case '-':
            resultado = valor1 - valor2;;
            document.getElementById("number-box").value= resultado;
        break;
        case '*':
            resultado = valor1 * valor2;
            document.getElementById("number-box").value= resultado;
        break;
        case '/':
            if (valor1 == 0 || valor2 == 0) {
                resultado = 'No se puede dividir entre cero';
            } else {
                resultado = valor1 / valor2;
            }
            document.getElementById("number-box").value= resultado;
            break;
        }
    }else{
        document.getElementById("number-box").value= '0';
    }

}
			


function incertarValor(numero) {
        if (document.getElementById("number-box").value == "0") {
            document.getElementById("number-box").value = numero;
            } else {
            document.getElementById("number-box").value += numero;
        }
}

function incertarValorPunto() {
    var valor3 = document.getElementById("number-box").value;
        if (valor3.indexOf(".") == -1 ){
        document.getElementById("number-box").value += document.getElementById('punto').value; 
    }
}







