function par(){
    let esnumeropar = document.getElementById("esPar");

    esnumeropar = parseInt(esnumeropar.value);

    if( esnumeropar % 2 == 0){
        alert("Es un numero par");
        console.log(esnumeropar, "comprobando");
    }
    else {
        alert("Es un numero impar");
    }
}