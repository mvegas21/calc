//numero uno
var operadoruno;

//simbolo
var operacion;

//numero dos
var operadordos;


function init(){
    
//variables
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var igual = document.getElementById("igual");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var sumar = document.getElementById("sumar");
    var restar = document.getElementById("restar");
    var multiplicar = document.getElementById("multiplicar");
    var dividir = document.getElementById("dividir");

//eventos

uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}

dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}

cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}


reset.onclick = function(e){
    resetear();
}



sumar.onclick = function(e){
    operadoruno = resultado.textContent;
    operacion = "+";
    limpiar();
}
restar.onclick = function(e){
    operadoruno = resultado.textContent;
    operacion = "-";
    limpiar();
}

multiplicar.onclick = function(e){
    operadoruno = resultado.textContent;
    operacion = "*";
    limpiar();
}

dividir.onclick = function(e){
    operadoruno = resultado.textContent;
    operacion = "/";
    limpiar();
}

igual.onclick = function(e){
    operadordos = resultado.textContent;
    resolver ();
    
}

}

function limpiar(){

    resultado.textContent = "";
}


function resetear(){

    resultado.textContent = "";
    operadordos = 0;
    operadoruno = 0;
    operacion = "";
}

function resolver(){
    var respuesta = 0;
    switch(operacion){
        case "+":
            respuesta = parseFloat(operadoruno) + parseFloat(operadordos);
            break;
        case "-":   
            respuesta = parseFloat(operadoruno) - parseFloat(operadordos);
            break;
       case "*":   
            respuesta = parseFloat(operadoruno) * parseFloat(operadordos);
            break; 
        case "/":   
            respuesta = parseFloat(operadoruno) / parseFloat(operadordos);
            break;
    }
    resetear();
    resultado.textContent = respuesta;
    
}