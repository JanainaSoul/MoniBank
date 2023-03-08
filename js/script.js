import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
const camposDoFormulario = document.querySelectorAll("[required]"); //criar uma variavel para todos os elementos required (obigatórios)

camposDoFormulario.forEach((campo)=> { // para campo da lista ele vai verificar
    campo.addEventListener("blur", () => verificaCampo(campo));  //aqui ele vai para cada campo ficar esperando o vevento blur q é quando tira o foco dali e ai vai para verificaCampo 
})

function verificaCampo(campo) { //precisa do valor do campo
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }
    if(campo.name == "aniversario" && campo.value != ""){
        ehMaiorDeIdade(campo);
    }
}