const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"você está em uma floresta e encontra uma casa abandonada",
        alternativas: [
            {
                texto: "você entra para se proteger da floresta durante a noite",
                afirmacao: "casa abandonada: você é esfaqueado"
            },
            {
                texto:  "você pega sua bazuca e atira na casa",
                afirmacao: "casa abandonada: você mata os mendigos"
            }
        ]
    },
    {
        enunciado: "ao entrar na casa apos sua escolha você vê um mendingo assustado e se escondendo. Oque você faz?",
        alternativas: [
            {
                texto: "dá um milhão de reais para ele ",
                afirmacao: "Mendingo:ele fica milionario, mas você vai a falencia"
            },
            {
                texto: "rouba ele ",
                afirmacao: "mendingo:você acha um diamante que vale US$450000"
            }
        ]
    },
    {
        enunciado: "o mendingo foje rico e rouba sua bazuca e atira na sua casa, Oque você faz?",
        alternativas: [
            {
                texto: "se esconde no telahado da casa ",
                afirmacao: "Mendingo bazuka: FIM você morre(ele errou a mira)"
            },
            {
                texto: "fica onde está",
                afirmacao: "Mendingo bazuca:você sobrevive "
            }
        ]
    },
    {
        enunciado: "De manhã voçe vai a floresta para achar a saida, e acaba vendo um urso, oque você faz?",
        alternativas: [
            {
                texto: "se esconde na caverna proxima",
                afirmacao: "URSO: FIM você morre"
            },
            {
                texto: "começa a correr",
                afirmacao: "URSO; voçe consegue despistalo mas perde uma perna"
            }
        ]
    },
    {
        enunciado: "você se arrasta pela floresta, e encontra uma rua e um carro para para você entrar, Oque você faz? ",
        alternativas: [
            {
                texto: "você entra no carro pela porta de traz",
                afirmacao: "Carro; FIM era o mendigo, ele te ajuda mas depois te leva para canibais"
            },
            {
                texto: "você entra pela porta da frente mas preparado.",
                afirmacao: "Carro; você bate no mendingo rouba o  carro e recupera as suas coisas mesmo não conseguindo dirigir"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

mostraPergunta();