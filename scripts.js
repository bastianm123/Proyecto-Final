let productos=[];
let total=0;
function add(producto,price){
    console.log(producto,price)
    productos.push(producto);
    total=total+price;
    document.getElementById("checkout").innerHTML=`Pagar $${total}`
}
function pay(){
    window.alert(productos.join(",\n"));
}