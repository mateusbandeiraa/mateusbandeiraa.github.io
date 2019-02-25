window.__forceSmoothScrollPolyfill__ = true;

document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector("#btnProjetos").onclick = function () {
        document.querySelector("#projetos").scrollIntoView({ behavior: 'smooth' });
    }
});