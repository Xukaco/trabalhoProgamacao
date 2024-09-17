const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sua equipe está enfrentando dificuldades para vencer o time adversário que tem um bloqueio muito eficiente.Seu técnico decide ajustar a estratégia para superar esse desafio.Como você ajustaria sua abordagem ofensiva para superar esse desafio?.",
        alternativas: [
            {
                texto: "Para superar um bloqueio forte,eu ajustaria minha abordagem ofensiva usando ataques rápidos e variando a altura e a direção dos meus golpes para evitar o bloqueio adversário.",
                afirmacao: "Usar ataques rápidos e variar a altura e direção dos golpes, além de coordenar estratégias ofencivas com a equipe, são abordagens eficazer para superar um bloqueio forte. "
            },
            {
                texto: "Eu focaria em explorar os pontos fracos do bloqueio adversário, usando ataques mais direcionados e mudança rápidas de ritmo.",
                afirmacao: "Explorar os pontos fracos do bloqueio adversário e manter uma comunicação clara e planejada com a equipe são essenciais para ajustar as táticas e melhorar a eficácia ofencisa contra um bloqueio robusto."
            }
        ]
    },
    {
        enunciado: "Durante uma partida de vôlei, sua equipe está em um momento crucial do jogo. O placar está empatado no quinto set, e o próximo ponto será decisivo para a vitória. A bola é levantada para o atacante da sua equipe, mas a defesa adversária está bem posicionada para o bloqueio. Em que situação você se sentiria mais confiante para usar uma técnica especifica de ataque para superar o bloqueio adversário? ",
        alternativas: [
            {
                texto: "Eu me sentiria mais confiante em utilizar a cortada diagonal quando percebo que o bloqueio adversário está centralizado, deixando as laterais da quadra mais vulneráveis.",
                afirmacao: "A cortada diagonal é uma jogada que aproveita os espaços deixados pelo bloqueio centralizado, aumentando as chancces de sucesso em montentos críticos."
            },
            {
                texto: "Eu optaria por uma largada quando noto que o bloqueio adversário está muito fechado e alto, focando apenas na força do ataque.",
                afirmacao: "A largada é uma escolha inteligente para supreender o adversário, explorando áreas vulneráveis logo atrás do bloqueio."
            }
        ]
    },
    {
        enunciado: "Durante uma partida de futebol, sua equipe está perdendo por 1 a 0, faltando apenas 10 minutos para o fim do jogo.O técnico decide mudar a formação tática para pressionar o adversário em busca do gol de empate.Qual formação você escolheria para aumentar as chances de empatar o jogo?",
        alternativas: [
            {
                texto: "Eu optaria por uma formação 3-4-3, pois ela adiciona mais atacantes e meio-campistas ofensivos, permitindo maior pressão sobre a defesa adversária e aumentando as opções de ataque.",
                afirmacao: "A formação 3-4-3 é eficaz para intensificar a pressão sobre a defesa adversária, aumentando as oportunidades de ataque, mesmo que isso deixa a equipe mais vulnerável na defesa."
            },
            {
                texto: "Eu escolheria uma formação 4-2-4, pois ao adicionar mais jogadores no ataque, podemos explorar melhor os espaços e criar mais oportunidades de gol.",
                afirmacao: "A formação 4-2-4 pode ser uma boa estratégia para criar mais chancer de gol e dominar o jogo, apesar do risco aumentado de sofrer contra-ataques."
            }
        ]
    },
    {
        enunciado: "Sua equipe está vencendo por 2 a 1 e restam apenas 15 minutos para o final do jogo.O técnico decide reforlçar adefesa para proteger a vantagem.Qual seria sua abordagem para reforçar a defesa e garantir a vitória ?",
        alternativas: [
            {
                texto: "Eu focaria em manter uma formação defensiva compacta, como o 4-4-2, para garantir que todos os espaços fossem cobertos.",
                afirmacao: "Manter uma ormação defensiva compacta exigir que os atacantes ajudem na marcação são estrategias eficazes para reforçar a defesa e garantir a vitória nos minutos finais de uma partida."
            },
            {
                texto: "Eu optaria por orientar a equipe a manter a posse de bola sempre que possível, utilizando passes curtos e controle no meio-campo para reduzir a pressão do adversário.",
                afirmacao: "Focar na posse de bola e na comunicação constante entre os jogadores 'crucial para controlar o jogo e ffortalecer a defesa, minimizando o risco de sofrer um gol nos momentos finais."
            }
        ]
    },
    {
        enunciado: "Em uma competição de esportes competitivos, sua equipe está enfrentando um adversário que possui uma vantagem em termos de tempo de jogo e experiencia. Para nivelr as conições e melhorar o desempenho da equipe, seu técnico decide implementar uma série de ajustes estratégicos.Que ajustes especificos que você faria na sua abordagem para compensar essa desvantagem ?",
        alternativas: [
            {
                texto: "Para compensar a falta de experiencia, eu ajustaria nossa abordagem ocano em estratégias simples e bem treinadas, como uma defesa sólia e jogadas rápidas para explorar qualquer brecha na defesa adversária. ",
                afirmacao: "Focar em estratégias simples e bem treinadas, juntamente com uma preparação mental que inclua simulações de pressão, pode ajudar a equipe a compensar a falta de experiencia e manter a confiança contra aversários mais experientes."
            },
            {
                texto: "Eu adotaria uma abordagem tática que maximizasse nossos pontos fortes, como movimentação rápida e comunicação eficaz, e evitaria entrar em confrontos diretos onde o adversário tem vantagem.",
                afirmacao: "Adotar uma abordagem tática que explore os pontos fortes de equipe e preparar mentalmente os jogadores com exercicios e visualização e técnicas de controle de estresse são fudamentais para enfrentar aversários mais experientes e superar desafios."
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
}

mostraPergunta();