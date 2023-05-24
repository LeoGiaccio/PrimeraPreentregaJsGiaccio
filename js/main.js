let Usuario = prompt ("Ingrese Nombre");
    alert("Bienvenido," + Usuario);

let Edad = prompt ("Ingrese edad");
while((Edad <= 19 || Edad > 100)){
    Edad= prompt( "Ingrese edad");

}
let Cantidad = prompt ("Ingrese cantidad hasta 100 unid");
while((Cantidad <= 0 || Cantidad > 100)){
    Cantidad = prompt( "Ingrese cantidad de unid");

}
const valor = 15;
const interes= 20;




let Pago = prompt ("Ingrese pago con: efectivo opcion:1 / tarjeta opcion:2");
if((Pago != 1) && (Pago != 2))  {
    Pago = prompt ("Ingrese pago con: efectivo opcion:1 / tarjeta opcion:2")
}

 const CalculoPago1 = (Cantidad, valor ) => {
    if(Pago == 1){
        let resultado = (Cantidad * valor);
        return resultado;}
        }
    const CalculoPago2 = (Cantidad, valor, interes) => {
    if (Pago == 2){
        let resultado = (Cantidad * valor);
        let resultadoint = resultado + ((valor * interes) / 100)
        return resultadoint}}
    let valor1 = CalculoPago1 (Cantidad, valor)
    let valor2 = CalculoPago2 (Cantidad, valor, interes)

console.log("Usuario:" + Usuario);
console.log("Edad:" + Edad);
console.log("Pago: " + Pago);
console.log("Cantidad: "+ Cantidad);
console.log("su valor es: " + valor1)
console.log("su valor es: " + valor2)












