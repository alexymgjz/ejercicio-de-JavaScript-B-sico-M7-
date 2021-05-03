/* console.log('Ejercicio 1');
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
var num1 = 5;
var num2 = 50;
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
console.log(""); */


console.log('Ejercicio 8');
console.log("");
var resultado = '0'; 
var valor1 = '0'; 
var valor2 = '0'; 

function calculadora(operador ,valor1 , valor2)
			{
                resultado=parseInt(resultado);   
                valor1=parseInt(valor1);   
                valor2=parseInt(valor2);   
			switch (operador) {
                case 'suma':
                    resultado = valor1 + valor2;
                    return resultado;
                break;
                case 'resta':
                    resultado = valor1 - valor2;;
                    return resultado;
                break;
                case 'multiplicacion':
                    resultado = valor1 * valor2;
                    return resultado;
                break;
                case 'divicion':
                    if (valor1 == 0 || valor2 == 0) {
                        resultado = 'No se puede dividir entre cero';
                    } else {
                        resultado = valor1 / valor2;
                    }
                    return resultado;
                    break;
                }
			}
			
			var resultat = calculadora('resta',40,20);
            document.getElementById("number-box").innerHTML= resultat;           
            console.log(resultat);

/* nivel 3 */
function borrar() {
    document.getElementById("number-box").value="0";
}

function incertarValorPunto() {
    var valor3 = document.getElementById("number-box").value;
    valor1 == document.getElementById("number-box").value;
    if (valor3.indexOf(".") == -1 ){
        document.getElementById("number-box").value += document.getElementById('punto').value; 
    }
}
function incertarValor1() {
    if (document.getElementById("number-box").value == "0") {
        document.getElementById("number-box").value = document.getElementById('1').value;
    } else {
        document.getElementById("number-box").value += document.getElementById('1').value;
    }
}

function incertarValor2() {
    if (document.getElementById("number-box").value == "0") {
        document.getElementById("number-box").value = document.getElementById('2').value;
    } else {
        document.getElementById("number-box").value += document.getElementById('2').value;
    }

}
function incertarValor3() {
    if (document.getElementById("number-box").value == "0") {
        document.getElementById("number-box").value = document.getElementById('3').value;
    } else {
        document.getElementById("number-box").value += document.getElementById('3').value;
    }
}
function incertarValor4() {
    if (document.getElementById("number-box").value == "0") {
        document.getElementById("number-box").value = document.getElementById('4').value;
    } else {
        document.getElementById("number-box").value += document.getElementById('4').value;
    }
}
function incertarValor5() {
    if (document.getElementById("number-box").value == "0") {
        document.getElementById("number-box").value = document.getElementById('5').value;
    } else {
        document.getElementById("number-box").value += document.getElementById('5').value;
    }
}
function incertarValor6() {
    if (document.getElementById("number-box").value == "0") {
        document.getElementById("number-box").value = document.getElementById('6').value;
    } else {
        document.getElementById("number-box").value += document.getElementById('6').value;
    }
}
function incertarValor7() {
    if (document.getElementById("number-box").value == "0") {
        document.getElementById("number-box").value = document.getElementById('7').value;
    } else {
        document.getElementById("number-box").value += document.getElementById('7').value;
    }
}
function incertarValor8() {
    if (document.getElementById("number-box").value == "0") {
        document.getElementById("number-box").value = document.getElementById('8').value;
    } else {
        document.getElementById("number-box").value += document.getElementById('8').value;
    }
}
function incertarValor9() {
    if (document.getElementById("number-box").value == "0") {
        document.getElementById("number-box").value = document.getElementById('9').value;
    } else {
        document.getElementById("number-box").value += document.getElementById('9').value;
    }
}
function incertarValor0() {
    if (document.getElementById("number-box").value == "0") {
        document.getElementById("number-box").value = document.getElementById('0').value;
    } else {
        document.getElementById("number-box").value += document.getElementById('0').value;
    }
}

function suma(operador ,valor1 , valor2) {
    
}


