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
        let reducao = indexProfessores === professores.length ? professores.length % 3 : 3;

        if (reducao === 0) {
            reducao = 3;
        }

        for (let i = 0; i < reducao; i++){
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
            let reducao = indexGraduados === graduados.length ? graduados.length % 3 : 3;
            
            if (reducao === 0) {
                reducao = 3;
            }
    
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

    function inicializarAlunos(ano) {
        const alunosContainer = document.getElementById(`alunos-${ano}`);
        const alunos = alunosContainer.querySelectorAll(".team-member");
        const carregarMaisAlunos = document.getElementById(`carregarMaisAlunos${ano}`);
        const carregarMenosAlunos = document.getElementById(`carregarMenosAlunos${ano}`);
        let indexAlunos = 3;
    
        function mostrarNovosAlunos() {
            for (let i = 0; i < 3; i++) {
                if (indexAlunos < alunos.length) {
                    alunos[indexAlunos].style.display = "block";
                    indexAlunos++;
                }
            }
    
            carregarMenosAlunos.style.display = indexAlunos > 3 ? "inline-block" : "none";
            carregarMaisAlunos.style.display = indexAlunos >= alunos.length ? "none" : "inline-block";
    
            // Suavização do scroll
            if (indexAlunos > 0) {
                alunos[indexAlunos - 1].scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    
        function esconderNovosAlunos() {
            let reducao = indexAlunos === alunos.length ? alunos.length % 3 : 3;

            if (reducao === 0) {
                reducao = 3;
            }
    
            for (let i = 0; i < reducao; i++) {
                if (indexAlunos > 0) {
                    indexAlunos--;
                    alunos[indexAlunos].style.display = "none";
                }
            }
    
            carregarMaisAlunos.style.display = indexAlunos < alunos.length ? "inline-block" : "none";
            carregarMenosAlunos.style.display = indexAlunos > 3 ? "inline-block" : "none";
    
            if (indexAlunos > 0) {
                alunos[indexAlunos - 1].scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    
        carregarMaisAlunos.addEventListener("click", mostrarNovosAlunos);
        carregarMenosAlunos.addEventListener("click", esconderNovosAlunos);
    
        // Inicializar o estado inicial
        for (let i = 0; i < alunos.length; i++) {
            alunos[i].style.display = i < 3 ? "block" : "none";
        }
        carregarMaisAlunos.style.display = alunos.length > 3 ? "inline-block" : "none";
        carregarMenosAlunos.style.display = "none";
    }

    mostrarNovosProfessores();

    carregarMaisProfessores.addEventListener("click", mostrarNovosProfessores);
    carregarMenosProfessores.addEventListener("click",esconderNovosProfessores);

    const anosGraduados = [2019, 2020];
    anosGraduados.forEach(inicializarGraduados);

    const anosAlunos = [2019, 2020, 2021, 2022, 2023, 2024];
    anosAlunos.forEach(inicializarAlunos);
    validaFormulario();

    window.scrollTo(0,0);

    document.querySelectorAll('input, textarea').forEach(function(element) {
        element.addEventListener('input', function() {
            validaFormulario();
        });
    });

    function validaFormulario() {
    
    let nome = document.querySelector('input[name="nome"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let celular = document.querySelector('input[name="celular"]').value;
    let mensagem = document.querySelector('textarea[name="mensagem"]').value;

    let submitButton = document.getElementById("submitButton");
    
    
    document.querySelectorAll('.error-message').forEach(function(errorSpan) {
        errorSpan.style.display = 'none';
    });

    let errors = false;

    
    if (nome === "") {
        document.getElementById('errorNome').textContent = "O campo 'Nome' está vazio.";
        document.getElementById('errorNome').style.display = 'block';
        errors = true;
    }

    if (email === "") {
        document.getElementById('errorEmail').textContent = "O campo 'Email' está vazio.";
        document.getElementById('errorEmail').style.display = 'block';
        errors = true;
    }

    if (celular === "") {
        document.getElementById('errorCelular').textContent = "O campo 'Celular' está vazio.";
        document.getElementById('errorCelular').style.display = 'block';
        errors = true;
    }

    if (mensagem === "") {
        document.getElementById('errorMensagem').textContent = "O campo 'Mensagem' está vazio.";
        document.getElementById('errorMensagem').style.display = 'block';
        errors = true;
    }

    
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && !emailPattern.test(email)) {
        document.getElementById('errorEmail').textContent = "O email não está no formato correto.";
        document.getElementById('errorEmail').style.display = 'block';
        errors = true;
    }

    
    if (errors) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
    }

    const form = document.getElementById('contatoForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        const formData = new FormData(form);
        e.preventDefault();

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        result.innerHTML = "Aguarde..."

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                    result.innerHTML = "Email enviado com sucesso!";
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Algo deu errado!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    });
});
