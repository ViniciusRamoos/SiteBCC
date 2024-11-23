/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {


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

    // Botões "Mostrar Mais" e "Mostrar Menos" da seção Alunos
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

    // Botões "Mostrar Mais" e "Mostrar Menos" da seção Professores
    const professoresContainer = document.getElementById("professores");
    const professores = professoresContainer.querySelectorAll(".col-lg-4");
    const carregarMaisProfessores = document.getElementById("carregarMaisProfessores");
    const carregarMenosProfessores = document.getElementById("carregarMenosProfessores");
    let indexProfessores = 0;

    function mostrarNovosProfessores(){
        for (let i = 0; i < 3; i++){
            if (indexProfessores < professores.length){
                professores[indexProfessores].style.display = "block";
                indexProfessores++;
            }
        }

        carregarMenosProfessores.style.display = indexProfessores > 3 ? "inline-block" : "none";

        carregarMaisProfessores.style.display = indexProfessores >= professores.length ? "none" : "inline-block";

        //Suavização do scroll
        if (indexProfessores > 0){
            professores[indexProfessores - 1].scrollIntoView({behavior: "smooth", block: "start"});
        }
    }

    function esconderNovosProfessores(){
        for (let i = 0; i < 3; i++){
            if (indexProfessores > 0){
                indexProfessores--;
                professores[indexProfessores].style.display = "none";
            }
        }

        carregarMaisProfessores.style.display = indexProfessores < professores.length ? "inline-block" : "none";

        carregarMenosProfessores.style.display = indexProfessores > 3 ? "inline-block" : "none";

        if(indexProfessores > 0){
            professores[indexProfessores - 1].scrollIntoView({behavior: "smooth", block:"start"});
        }
    }

    function inicializarGraduados(ano) {
        const graduadosContainer = document.getElementById(`graduados-${ano}`);
        const graduados = graduadosContainer.querySelectorAll(".team-member");
        const carregarMaisGraduados = document.getElementById(`carregarMaisGraduados${ano}`);
        const carregarMenosGraduados = document.getElementById(`carregarMenosGraduados${ano}`);
        let indexGraduados = 3;
    
        function mostrarNovosGraduados() {
            for (let i = 0; i < 3; i++) {
                if (indexGraduados < graduados.length) {
                    graduados[indexGraduados].style.display = "block";
                    indexGraduados++;
                }
            }
    
            carregarMenosGraduados.style.display = indexGraduados > 3 ? "inline-block" : "none";
            carregarMaisGraduados.style.display = indexGraduados >= graduados.length ? "none" : "inline-block";
    
            // Suavização do scroll
            if (indexGraduados > 0) {
                graduados[indexGraduados - 1].scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    
        function esconderNovosGraduados() {
            const reducao = indexGraduados === graduados.length ? graduados.length % 3 : 3;
    
            for (let i = 0; i < reducao; i++) {
                if (indexGraduados > 0) {
                    indexGraduados--;
                    graduados[indexGraduados].style.display = "none";
                }
            }
    
            carregarMaisGraduados.style.display = indexGraduados < graduados.length ? "inline-block" : "none";
            carregarMenosGraduados.style.display = indexGraduados > 3 ? "inline-block" : "none";
    
            if (indexGraduados > 0) {
                graduados[indexGraduados - 1].scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    
        carregarMaisGraduados.addEventListener("click", mostrarNovosGraduados);
        carregarMenosGraduados.addEventListener("click", esconderNovosGraduados);
    
        // Inicializar o estado inicial
        for (let i = 0; i < graduados.length; i++) {
            graduados[i].style.display = i < 3 ? "block" : "none";
        }
        carregarMaisGraduados.style.display = graduados.length > 3 ? "inline-block" : "none";
        carregarMenosGraduados.style.display = "none";
    }

    mostrarNovosAlunos();
    mostrarNovosProfessores();
    window.scrollTo(0,0);

    carregarMaisAlunos.addEventListener("click", mostrarNovosAlunos);
    carregarMaisProfessores.addEventListener("click", mostrarNovosProfessores);
    carregarMenosAlunos.addEventListener("click",esconderNovosAlunos);
    carregarMenosProfessores.addEventListener("click",esconderNovosProfessores);

    const anos = [2019, 2020];
    anos.forEach(inicializarGraduados);

});
