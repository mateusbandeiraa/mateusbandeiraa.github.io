function mostrarMenu(){
    document.querySelector("#barraSuperior").classList.add("ativo");
}

function esconderMenu(){
    document.querySelector("#barraSuperior").classList.remove("ativo");
}

function toggleMenu(){
    if(document.querySelector("#barraSuperior").classList.contains("ativo")){
        esconderMenu();
    } else{
        mostrarMenu();
    }
}