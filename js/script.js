import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
const camposDoFormulario = document.querySelectorAll("[required]"); //criar uma variavel para todos os elementos required (obigatórios)
const formulario = document.querySelector("[data-formulario]"); //pegando o data atribute do html

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    const listaRespostas = { // para captar as respostas dos cadastros no site
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas)); //armazenamento local, transformou em JSON

    window.location.href = './abrir-conta-form-2.html'; //redirecionamento para a ultima parte do form
})

camposDoFormulario.forEach((campo)=> { // para campo da lista ele vai verificar
    campo.addEventListener("blur", () => verificaCampo(campo));  //aqui ele vai para cada campo ficar esperando o vevento blur q é quando tira o foco dali e ai vai para verificaCampo 
    campo.addEventListener('invalid', evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing', //valor faltando
    'typeMismatch', //tipo não combina - email@dominio.com
    'patterMismatch', //ex do CPF tem a expressão regular
    'tooShort', // por causa do minLength
    'customError' //erros customizados
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) { //precisa do valor do campo
    let mensagem = "";
    campo.setCustomValidity('');
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }
    if(campo.name == "aniversario" && campo.value != ""){
        ehMaiorDeIdade(campo);
    }
    // console.log(campo.validity);
    tiposDeErro.forEach(erro => { //forEach vai executar p cada erro
        if(campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro'); //fica no campo q esta clicado
    const validadorDeInput = campo.checkValidity(); //checar se esta valido, se não ele vai imprimir o texto erro se tiver ok ele tira a mensagem do erro

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem;
    }else {
        mensagemErro.textContent = "";
    }
}