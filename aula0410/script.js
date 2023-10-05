// parte da troca de paginas com o botão btnProximo
const btnProximo = document.getElementById("btnProximo");
const secoes = document.querySelectorAll(".section_form");
let paginaAtual = 0;

btnProximo.addEventListener("click", function () {
    if (paginaAtual < secoes.length - 1) {
        secoes[paginaAtual].style.display = "none"; // Oculta a seção atual
        paginaAtual++; // Avança para a próxima página
        secoes[paginaAtual].style.display = "block"; // Exibe a próxima seção
    }
});
















//ligacoes 
let htmlPontuaçao = document.getElementById("pontuacao")

// variaveis globais
let pontos = 0

function pontuar(){
    pontos += 10
    htmlPontuaçao.innerHTML = pontos
}    
 pontuar ()

function atualizarProgresso() {

     // Obter os elementos do formulário
     const nome = document.getElementById("input1").value;
     const sobrenome = document.getElementById("input2").value;
     const idade = document.getElementById("input3").value;
     const email = document.getElementById("input4").value;
     const celular = document.getElementById("input5").value;
     const altura = document.getElementById("input6").value;
     const busto = document.getElementById("input7").value;
     const cintura = document.getElementById("input8").value;
     const quadril = document.getElementById("input9").value;
     const estilo = document.getElementById("input10").value;



      // Calcular a pontuação com base no preenchimento dos campos (exemplo simples)
    const pontuacao = (nome.length + sobrenome.length + idade.length + email.length + celular.length + altura.length + cintura.length + quadril.length + busto.length + estilo.length  ) / 12;  

    // Definir a barra de progresso com base na pontuação
    const barraDeProgresso = document.getElementById("progresso-formulario");
    barraDeProgresso.value = pontuacao;
}    

// Adicione um ouvinte de evento "input" a cada campo do formulário
const campos = document.querySelectorAll("input");
campos.forEach(function (campo) {
    campo.addEventListener("input", atualizarProgresso);
});    




