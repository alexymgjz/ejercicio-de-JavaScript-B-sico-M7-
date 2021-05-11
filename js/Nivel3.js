    /* VARIABLES */
    var expRegular1 = /\d/;
    var expRegular2 = /[AEIOU]/i;
    var expRegular3 = /[^AEIOU\d]/i;
    var expRegular4 = /[a-z-?ñ?-?]+@[-?a-z-ñ?]+\.[-?a-z-?]{2,4}\b/img;
    /* Nivel 1 Ejercicio 1 */

function Nivel1Ejercicio1() {
    document.getElementById('text').innerHTML='';
    let nombre = prompt('Su nombre?:')
    let noNumberName = nombre.replace(expRegular1,"");
    var arrNoNumber = noNumberName.split('')
    for (let i = 0; i < arrNoNumber.length; i++) {
    //document.getElementById('text').innerHTML+="${arrNoNumberName[i]}" + '</br>';
    //document.getElementById('text').innerHTML+= '"' + noNumberName[i] + '"' + '\r\n';
    document.getElementById('text').innerHTML+= arrNoNumber[i] +' </br>';
}
}




/* Nivel 1 Ejercicio 2 */

    function Nivel1Ejercicio2() {
    document.getElementById('text').innerHTML='';
    let CadenaDeTexto = prompt('introduse tu nombre con numeros en su interior')

    for (let i = 0; i < CadenaDeTexto.length; i++) {
        
        if (expRegular2.test(CadenaDeTexto[i])){
            document.getElementById('text').innerHTML+= 'He encontrado la VOCAL: ' + CadenaDeTexto[i] +' </br>';
        }
        if (expRegular3.test(CadenaDeTexto[i])){
            document.getElementById('text').innerHTML+='He encontrado la CONSONTANT:  ' + CadenaDeTexto[i] + ' </br>' ;
        }
        
        if (expRegular1.test(CadenaDeTexto[i])){
            document.getElementById('text').innerHTML+='Los nombres de personas no contienen el número: ' + CadenaDeTexto[i] + ' </br>';
        }
    }

}


/* Nivel 1 Ejercicio 3 */

function Nivel1Ejercicio3() {
    document.getElementById('text').innerHTML='';
    let nombre =prompt('Su nombre?:').toUpperCase() ;
    var noNumberNames = nombre.replace(expRegular1,"");
    var arrNoNumberNames = noNumberNames.split("");
    var listedCounts = {};
    var nameMaped = arrNoNumberNames.map(letter =>{
    if (listedCounts[letter]) {
        listedCounts[letter] = listedCounts[letter]+1
    } else {
        listedCounts[letter] = 1;   
    }
    });
    for (const leter in listedCounts) {
        if (Object.hasOwnProperty.call(listedCounts, leter)) {
            document.getElementById('text').innerHTML+= leter + ':' + listedCounts[leter] + ' </br>';
            
        }
    }

}


/* Nivel 1 Ejercicio 4 */
function Nivel1Ejercicio4() {
    document.getElementById('text').innerHTML='';
    var names = prompt('Su nombre?:').toUpperCase()
        names.split('') ;
    var lastNames =  prompt('Su apellido?:').toUpperCase()
        lastNames.split('') 
    var fullName = [...names,' ',...lastNames ];
    for (const text of fullName) {
        document.getElementById('text').innerHTML+= text + ' </br>';
    }
    
    
}

/* Nivel 2 Ejercicio*/

function Nivel2() {
    document.getElementById('text').innerHTML='';
    var texto = document.getElementById('texto').value;
    let mails = texto.match(expRegular4);
    let tempsMails =[] ;
    if (mails) {
        tempsMails=mails.sort();
    }else if (mails === null) {
            document.getElementById('text').innerHTML+='No se encontro ningun correo. Introduce un texto con almenos un correo valido';
        }
    
    let noRepeatMails=[]
        if (tempsMails) {
        for (let i = 0; i < tempsMails.length; i++) {
            if (tempsMails[i + 1] != tempsMails[i]) {
                noRepeatMails.push(tempsMails[i]);
            

            } else if (tempsMails === null) {
                document.getElementById('text').innerHTML+='No se encontro ningun correo. Introduce un texto con almenos un correo valido';
            }

        }
}
    noRepeatMails.reverse()
        for (const mail of noRepeatMails) {
                document.getElementById('text').innerHTML+= mail + ' </br>';
            }
}