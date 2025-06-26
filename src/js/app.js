document.addEventListener('DOMContentLoaded', function() {

    eventListeners();

    darkMode();
})

function darkMode() {

    // Busca la preferencia de SO en darkmode
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefiereDarkMode);
    if(prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');
    })
}

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    // if (navegacion.classList.contains('mostrar')) {
    //     navegacion.classList.remove('mostrar');
    // } else {
    //     navegacion.classList.add('mostrar');
    // } ---> Forma mas sencilla con toggle
    navegacion.classList.toggle('mostrar');
}