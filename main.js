const menuItems = document.querySelector('.menu_items')
const btnMenu = document.querySelector('.btn_menu')
const navBar = document.querySelector('.menu');
const pantallaPequenia = window.matchMedia("(max-width: 858px)");
document.addEventListener('DOMContentLoaded', () => {
    btnMenu.addEventListener('click', mostrarMenu);
    menuItems.addEventListener('click', mostrarMenu);
});

function mostrarMenu() {
    if (pantallaPequenia.matches) {
        const body = document.querySelector('body');
        menuItems.classList.toggle('show');
        body.classList.toggle('no_scroll')
    }
};


gsap.from('.inicio_mensaje2', {y: -10, autoAlpha: 0, delay: 3})
gsap.from('.inicio_mensaje1', {y: -10, autoAlpha: 0, delay: 1 })
gsap.from('.inicio_nombre', {y: -10, autoAlpha: 0, delay: 2 })
gsap.from('.proyectos_title', {scrollTrigger: {trigger: '.proyectos_title',toggleActions: 'restart none none none'}, x: "-=500px", autoAlpha: 0 })
gsap.from('.habilidades_title', {scrollTrigger: {trigger: '.habilidades_title',toggleActions: 'restart none none none'},x: "-=500px",autoAlpha: 0 })
gsap.from('.sobre-mi_title', {scrollTrigger: {trigger: '.sobre-mi_title', toggleActions: 'restart none none none'}, x: "-=500px", autoAlpha: 0 })
gsap.from('.contacto_title', {scrollTrigger: {trigger: '.contacto_title', toggleActions: 'restart none none none'}, x: "-=500px", autoAlpha: 0})

// Animaciones Proyectos
gsap.from('.proyecto1', {scrollTrigger: {trigger: '.proyecto1',},x: "-=500px", autoAlpha: 0, duration: 0.8, delay: 0.5})
gsap.from('.proyecto2', {scrollTrigger: {trigger: '.proyecto2',},x: "+=500px",autoAlpha: 0,duration: 0.8,delay: 0.5})
gsap.from('.proyecto3', {scrollTrigger: {trigger: '.proyecto3',}, x: "-=500px", autoAlpha: 0, duration: 0.8, delay: 0.5})

gsap.from('.tecnologias', {scrollTrigger: {trigger: '.tecnologias', }, x: "-=500px", autoAlpha: 0, duration: 0.8, delay: 0.5 })
gsap.from('.blandas', {scrollTrigger: {trigger: '.blandas',},x: "+=500px",autoAlpha: 0,duration: 0.8,delay: 0.5})
gsap.from('.sobre-mi_img', {scrollTrigger: {trigger: '.sobre-mi_img',},x: "-=500px",autoAlpha: 0,duration: 0.8,delay: 0.5})
gsap.from('.sobre-mi_descripcion', {scrollTrigger: {trigger: '.sobre-mi_descripcion',},x: "+=500px",autoAlpha: 0,duration: 0.8,delay: 0.5})
gsap.from('.contacto_container', {scrollTrigger: {trigger: '.contacto_container',},scale: 0.7,top: -100,autoAlpha: 0,duration: 0.8,delay:0.5,})