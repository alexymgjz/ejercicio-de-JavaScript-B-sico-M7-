    /* VARIABLES */
    var names = [ 'A', 'L', 'E', 'X', 'Y', 'S' ];
    var lastNames = [ 'M', 'A', 'R', 'T', 'I', 'N','E', 'Z'];
    var nombre ='ALEJ3ANDRO';
    var expRegular1 = /\d/;
    var expRegular2 = /[AEIOU]/i;
    var expRegular3 = /[^AEIOU\d]/i;
    var expRegular4 = /[a-z-?ñ?-?]+@[-?a-z-ñ?]+\.es/igm; 
    var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.e : La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

/* Nivel 1 Ejercicio 1 */
console.log('Nivel 1 Ejercicio 1'); 
console.log("");


function Nivel1Ejercicio1(nombre) {
    for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);  
}

}
console.log(Nivel1Ejercicio1(names));
console.log("");



/* Nivel 1 Ejercicio 2 */

console.log('Nivel 1 Ejercicio 2');
console.log("");



    function Nivel1Ejercicio2(CadenaDeTexto) {

    for (let i = 0; i < CadenaDeTexto.length; i++) {
        
        if (expRegular2.test(CadenaDeTexto[i])){
            console.log('He encontrado la VOCAL: ' + CadenaDeTexto[i]);
        }
        if (expRegular3.test(CadenaDeTexto[i])){
            console.log('He encontrado la CONSONTANT:  ' + CadenaDeTexto[i]);
        }
        
        if (expRegular1.test(CadenaDeTexto[i])){
        console.log('Los nombres de personas no contienen el número: ' + CadenaDeTexto[i]);
        }
    }

}

console.log(Nivel1Ejercicio2(nombre));
console.log("");


/* Nivel 1 Ejercicio 3 */
console.log('Nivel 1 Ejercicio 3');

var noNumberName = nombre.replace(expRegular1,"");
var arrNoNumberName = noNumberName.split("");
var listedCounts = {};
var nameMaped = arrNoNumberName.map(letter =>{
if (listedCounts[letter]) {
    listedCounts[letter] = listedCounts[letter]+1
} else {
    listedCounts[letter] = 1;   
}
});

console.log(listedCounts)
console.log("");

/* Nivel 1 Ejercicio 4 */



console.log('Nivel 1 Ejercicio 4');
function Nivel1Ejercicio4(arr1,arr2) {
    var fullName = [...arr1,' ',...arr2 ];
    return fullName;
    
}

console.log(Nivel1Ejercicio4(names,lastNames));
console.log("");

console.log("");
/* Nivel 2 Ejercicio*/



console.log('Nivel 2');

function Nivel2(texto) {
    let mails = texto.match(expRegular4);
    mails.sort();
    mails.reverse();
    return mails;
    
}

console.log(Nivel2(str));
console.log("");





