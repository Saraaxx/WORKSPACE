function negativo(){
    let esnumeronegativo = document.getElementById("negativo");

    esnumeronegativo = parseInt(esnumeronegativo.value);

    if(esnumeronegativo < 0){
        alert("Es un numero negativo");
        console.log(esnumeronegativo, "comprobando");
    }
    else {
        alert("No es un numero negativo ");
    }
}