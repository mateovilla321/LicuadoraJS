var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sonidos");
var sonidoBoton = document.getElementById("blender-button-sonidos")
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        hacerBrr();
        licuadora.classList.add("active")
        console.log("Me prendiste");
    }else{
        estadoLicuadora = "apagada";
        hacerBrr();
        licuadora.classList.remove("active")
        console.log("Me apagaste");
    }
}

function    hacerBrr(){
    if( sonidoLicuadora.paused ){
        sonidoBoton.play();
        sonidoLicuadora.play();
    } else {
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }    
}