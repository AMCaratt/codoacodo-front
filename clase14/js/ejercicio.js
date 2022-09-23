/* calculadora:

+
-
*

*/
function calcular(){
    let op1;
    let op2;
    let operacion;
    let resultado;
    

    //leer dato
    //javascrip tiene una funcion que se llama document.getelementbyad.value
op1= document.getElementById('op1').value;
operacion= document.getElementById('operacion').value;
op2= document.getElementById('op2').value;
console.log('op1 vale: ',op1);
console.log('operacion vale:',operacion)
console.log('op2 vale: ',op2);

//ahora el bloque de if
 if (operacion==='+'){
    resultado= parseInt(op1) +parseInt(op2);//string>number
 }
 if(operacion==='-'){
    resultado= parseInt(op1) - parseInt(op2);
 }
 if(operacion==="/"){
    if(op2!==0){
        resultado=op1/op2;
    }
 }
 if (operacion==='*'){
    resultado=parseInt(op1)* parseInt(op2);
 }
 console.log(resultado);
 document.getElementById('resultado').innerHTML = resultado;
}
