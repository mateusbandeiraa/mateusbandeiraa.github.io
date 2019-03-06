const ambiente = /mateusbandeira\.dev/.test(document.location.hostname) ? "prod" : "dev";
if (ambiente == "dev") {
    import("/js/live.js").then((livejs) => { livejs.default() }); // Atualiza a página automaticamente se houver mudanças no HTML, CSS ou JS.
} else { // prod
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-135366133-1');
}

function mostrarMenu() {
    document.querySelector("#barraSuperior").classList.add("ativo");
}

function esconderMenu() {
    document.querySelector("#barraSuperior").classList.remove("ativo");
}

function toggleMenu() {
    if (document.querySelector("#barraSuperior").classList.contains("ativo")) {
        esconderMenu();
    } else {
        mostrarMenu();
    }
}