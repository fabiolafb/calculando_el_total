function calcular(){
    var cant=document.getElementById("cantidad").value;
    var val=document.getElementById("precio").getAttribute("value");
    var col=document.getElementById("color").value;

    parseInt(cant)
    parseInt(val)
    var total = cant*val

    document.getElementById("total").innerHTML = total.toLocaleString("es-CL", {style: "currency", currency: "CLP"});
    document.getElementById("cant-total").innerHTML =cant;
    document.getElementById("color-final").style.backgroundColor = col;
}