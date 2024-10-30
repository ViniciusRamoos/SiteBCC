/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -10%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Botões "Mostar Mais" e "Mostrar Menos" da seção Alunos
    const alunosContainer = document.getElementById("alunos");
    const alunos = alunosContainer.querySelectorAll(".col-lg-4, h3");
    const carregarMaisAlunos = document.getElementById("carregarMaisAlunos");
    const carregarMenosAlunos = document.getElementById("carregarMenosAlunos");
    let indexAlunos = 0;

    function mostrarNovosAlunos(){
        for (let i = 0; i < 3; i++){
            if (indexAlunos < alunos.length){
                alunos[indexAlunos].style.display = "block";
                indexAlunos++;
            }
        }

        carregarMenosAlunos.style.display = indexAlunos > 3 ? "inline-block" : "none";

        carregarMaisAlunos.style.display = indexAlunos >= alunos.length ? "none" : "inline-block";

        //Suavização do scroll
        if (indexAlunos > 0){
            alunos[indexAlunos - 1].scrollIntoView({behavior: "smooth", block: "start"});
        }
    }

    function esconderNovosAlunos(){
        for (let i = 0; i < 3; i++){
            if (indexAlunos > 0){
                indexAlunos--;
                alunos[indexAlunos].style.display = "none";
            }
        }

        carregarMaisAlunos.style.display = indexAlunos < alunos.length ? "inline-block" : "none";

        carregarMenosAlunos.style.display = indexAlunos > 3 ? "inline-block" : "none";

        if(indexAlunos > 0){
            alunos[indexAlunos - 1].scrollIntoView({behavior: "smooth", block:"start"});
        }
    }

    // Botões "Mostar Mais" e "Mostrar Menos" da seção Areas
    const areasContainer = document.getElementById("portfolio");
    const areas = areasContainer.querySelectorAll(".col-lg-4, .col-sm-6");
    const carregarMaisAreas = document.getElementById("carregarMaisAreas");
    const carregarMenosAreas = document.getElementById("carregarMenosAreas");
    let indexAreas = 0;

    function mostrarNovasAreas(){
        for (let i = 0; i < 3; i++){
            if (indexAreas < areas.length){
                areas[indexAreas].style.display = "block";
                indexAreas++;
            }
        }

        carregarMenosAreas.style.display = indexAreas > 3 ? "inline-block" : "none";

        carregarMaisAreas.style.display = indexAreas >= areas.length ? "none" : "inline-block";
        
        //Suavização do scroll
        if (indexAreas > 0){
            areas[indexAreas - 1].scrollIntoView({behavior: "smooth", block: "start"});
        }
    }

    function esconderNovasAreas(){
        for (let i = 0; i < 3; i++){
            if (indexAreas > 0 ){
                indexAreas--;
                areas[indexAreas].style.display = "none";
            }
        }

        carregarMaisAreas.style.display = indexAreas < areas.length ? "inline-block" : "none";

        carregarMenosAreas.style.display = indexAreas > 3 ? "inline-block" : "none";

        if (indexAreas > 0){
            areas[indexAreas - 1].scrollIntoView({behavior: "smooth", block: "start"});
        }
    }


    mostrarNovosAlunos();
    mostrarNovasAreas();

    carregarMaisAlunos.addEventListener("click", mostrarNovosAlunos);
    carregarMaisAreas.addEventListener("click", mostrarNovasAreas);
    carregarMenosAlunos.addEventListener("click",esconderNovosAlunos);
    carregarMenosAreas.addEventListener("click",esconderNovasAreas);

});
