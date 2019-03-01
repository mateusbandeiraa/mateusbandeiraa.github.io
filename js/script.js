window.__forceSmoothScrollPolyfill__ = true;

document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector("#btnProjetos").onclick = function () {
        document.querySelector("#projetos").scrollIntoView({ behavior: 'smooth' });
    }
});

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