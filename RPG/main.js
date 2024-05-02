const personagem1 = {
    nome: "Finn",
    img: "/src/img/Happyfinn.jpg",
    divId:  "localDoPersonagemFinn"
};

const personagem2 = {
    nome: "Jake",
    img: "/src/img/jake.jpg",
    divId: "localDoPersonagemJake"
};

const personagem3 = {
    nome: "Jujuba",
    img: "/src/img/Jujuba.jpg",   
    divId:  "localDoPersonagemJujuba"
};

const personagem4 = {
    nome: "Rei Gelado",
    img: "/src/img/rei-gelado.jpg",   
    divId: "localDoPersonagemReiGelado"
};

const personagem5 = {
    nome: "Gunter",
    img: "/Personagens/Sobre Os Personagens/cosmico/Gunter.webp",   
    divId: "localDoPersonagemGunter"
};

const personagensPrincipais = [personagem1, personagem2, personagem3, personagem4, personagem5];

let numero1 = Math.floor(Math.random()* 5);
let numero2 = Math.floor(Math.random()* 5);
let numero3 = Math.floor(Math.random()* 5);
let numero4 = Math.floor(Math.random()* 5);
if (numero1 == numero2){
    do {
      numero2 = Math.floor(Math.random()* 5);
    
    } while (numero1 == numero2);    
}
if(numero1 == numero3 || numero2== numero3){
   do{
    numero3 = Math.floor(Math.random()* 5);
   } while(numero1 == numero3 || numero2 == numero3);
};
if(numero1 == numero4 || numero2== numero4 || numero3 == numero4){
    do{
     numero4 = Math.floor(Math.random()* 5);
    } while(numero1 == numero4 || numero2== numero4 || numero3 == numero4);
 };
let numeros = [numero1, numero2, numero3, numero4]
console.log(numeros)

for (let i = 0; i < 4; i++){ 
    
    
    const personagens = `
    
    <div class="locaisDosPersonagens" onclick="psm${numeros[i] + 1}()" id="${personagensPrincipais[numeros[i]].divId}">
    <img src="${personagensPrincipais[numeros[i]].img}" class="imageDosPersonagensDoLado" alt="${personagensPrincipais[numeros[i]].nome}">
    <p>${personagensPrincipais[numeros[i]].nome}</p>
</div>`;
    document.getElementById("personagensLado").innerHTML += personagens;
}

function psm1(){
    location.href = "/Personagens/Sobre Os Personagens/normal/herois.html"
}

function psm2(){
    location.href = "/Personagens/Sobre Os Personagens/normal/herois.html"
}

function psm3(){
    location.href = "/Personagens/Sobre Os Personagens/vilão/de.html"
}

function psm4(){
    location.href = "/Personagens/Sobre Os Personagens/vilão/de.html"
}

function psm5(){
    location.href = "/Personagens/Sobre Os Personagens/cosmico/deus.html"
}

function portugues(){
const portugues = `
<div class="partePrincipalWikiCima" id="partePrincipalWikiCima">
<div class="imageWikiCima">
<img src="/src/img/caracol.webp" id="imageCaracol" alt="caracol">
<img src="/src/img/logo hora de aventura.png" id="logoHoraDeAventura" alt="logo hora de aventura">
</div>
<h1 class="tituloDaPagina">RPG</h1>
<div class="imageDoLivro">

<img src="/src/img/livro de rpg.png" id="livroDeRpg" alt="livro de rpg">
</div>
<p class="textoDotituloDaPagina">"Hora de Aventura: O RPG" é um jogo de interpretação de papéis (RPG)
baseado na popular série de desenhos animados "Hora de Aventura". Desenvolvido por fãs e adaptado
para ser jogado em mesas, o RPG mergulha os participantes no colorido e mágico mundo de Ooo, onde
heróis improváveis vivem incríveis aventuras.
</p>
</div>
<h2 class="subTituloWiki">Sistema de Jogo</h2>
<p class="textoWiki">O sistema de jogo é projetado para ser amigável aos jogadores iniciantes, mas
também oferece profundidade suficiente para satisfazer jogadores mais experientes. Geralmente, são
utilizados dados de seis lados (d6) para resolver ações, e as características dos personagens são
representadas por estatísticas como Força, Destreza, Inteligência e Carisma.</p>

<h2 class="subTituloWiki">Cenário</h2>
<p class="textoWiki">O cenário do RPG reflete o mundo pós-apocalíptico de Ooo, habitado por personagens
como Finn, o Humano, Jake, o Cão, Princesa Jujuba, Marceline, Rei Gelado e muitos outros. O Mestre
do Jogo (GM) cria narrativas e desafios para os jogadores explorarem, incorporando elementos
característicos da série, como a Terra do Caroço, a Terra Doce, a Terra do Fogo e o Reino Gelado.
</p>

<h2 class="subTituloWiki">Criação de personagem</h2>
<hr class="linhaSubTituloWiki">


<h3 class="subTituloDoSubTituloWiki">Raças</h3>
<p class="subTextoWiki">Os jogadores têm a opção de escolher entre diversas raças que povoam o
intrigante mundo de Ooo. Desde humanos adaptáveis e versáteis, a criaturas mágicas como elfos e
unicórnios, até vampiros com habilidades sobrenaturais e cães antropomórficos dotados de
metamorfose, as escolhas de raça influenciam as características e habilidades únicas de cada
personagem. Robôs e seres artificiais também fazem parte das opções, oferecendo resistência física
aprimorada e habilidades tecnológicas avançadas. Cada raça traz consigo uma narrativa distinta e
contribui para a diversidade de experiências que os jogadores podem explorar ao embarcar em suas
próprias aventuras em Ooo.</p>

<h3 class="subTituloDoSubTituloWiki">Classes</h3>
<p class="subTextoWiki">As classes em "Hora de Aventura: O RPG" oferecem aos jogadores oportunidades
distintas de moldar seus personagens e desempenhar papéis específicos dentro do universo encantador
de Ooo. Desde os corajosos Aventureiros Espada de Grama, habilidosos na arte da luta corpo a corpo,
até os Bruxos da Magia Doce, mestres em lançar feitiços doces e poderosos, as opções são diversas.
Os Exploradores da Terra das Sombras lidam com os mistérios sobrenaturais, enquanto os Engenheiros
Tecnológicos criam invenções avançadas. Os Bardos Musicais de Ooo utilizam a música como arma,
inspirando aliados e desorientando inimigos. Cada classe apresenta habilidades únicas, permitindo
que os jogadores personalizem suas jornadas, contribuindo para a riqueza e diversidade de histórias
que podem ser vivenciadas no emocionante mundo de Hora de Aventura.
</p>

<h2 class="subTituloWiki">Poderes</h2>
<hr class="linhaSubTituloWiki">


<h3 class="subTituloDoSubTituloWiki">Magia</h3>
<p class="subTextoWiki">A magia desempenha um papel crucial, oferecendo aos jogadores uma variedade de
poderes mágicos inspirados no mundo encantador de Ooo. A Magia de Gelo permite controlar o gelo, a
Magia Doce envolve a manipulação de doces encantados, a Magia Elemental concede o controle sobre os
elementos naturais, e a Magia das Sombras permite a manipulação de sombras para vários propósitos.
Cada tipo de magia proporciona aos personagens habilidades únicas e estratégias mágicas para
enfrentar os desafios e mistérios que permeiam o universo extraordinário de Hora de Aventura.</p>

<h3 class="subTituloDoSubTituloWiki">Habilidades</h3>
<p class="subTextoWiki">As habilidades são as aptidões distintas que os personagens podem desenvolver
para moldar suas jornadas no mágico mundo de Ooo. Desde a versatilidade de Transformação de Jake,
inspirada no Cão Jake, até a habilidade de Manipulação de Doce, associada à Princesa Jujuba, que
permite criar doces encantados, cada habilidade oferece uma dimensão única ao personagem. Proezas
Musicais capacitam os Bardos Musicais de Ooo a usar a música como arma, enquanto Mestre da
Tecnologia concede a capacidade de criar dispositivos tecnológicos avançados. Estas habilidades
proporcionam aos jogadores uma ampla gama de opções estratégicas para enfrentar desafios,
contribuindo para a diversidade e personalização das histórias vivenciadas neste cativante RPG.
</p>



<div class="parteDeContribuir">
<img src="/src/img/litch vs finn.jpg" id="litchVsFinn" alt="litch vs finn">
<div>
    <h2 class="tituloContribuir">Aventuras e Missões</h2>
    <p class="textContribuir">O Mestre do Jogo guia os jogadores através de aventuras emocionantes,
        que podem incluir salvar a Princesa Jujuba de uma ameaça iminente, explorar masmorras
        misteriosas ou ajudar personagens icônicos a resolverem seus problemas. Missões podem variar
        desde tarefas simples até desafios épicos para salvar todo o reino.
    </p>

    <h2 class="tituloContribuir">Arte e Estilo</h2>
    <p class="textContribuir">O RPG de Hora de Aventura geralmente incorpora o estilo único e
        colorido de arte da série animada. Os materiais do jogo, como folhas de personagens, dados e
        mapas, frequentemente apresentam ilustrações vibrantes dos personagens e locais famosos de
        Ooo.</p>
</div>
</div>`;

document.getElementById("osDaEsquerda").innerHTML = portugues;

document.getElementById("personagensPrinc").innerHTML = "Personagens Principais"

document.getElementById("pesquisadinha").placeholder = "Pesquisar"
document.getElementById("nomePaginaPrin").innerHTML = "Página Inicial";
document.getElementById("nomePersonagens").innerHTML = "Personagens";
document.getElementById("nomeObjetos").innerHTML = "Objetos";
document.getElementById("nomeEpisodios").innerHTML = "Episodios";
document.getElementById("outrasLinguas").innerHTML = "Outras línguas";

document.getElementById("englishPf").classList.remove("linguasDif")
document.getElementById("portuguesPf").classList.add("linguasDif")
}


function english(){
const english = `
<div class="partePrincipalWikiCima" id="partePrincipalWikiCima">
<div class="imageWikiCima">
<img src="/src/img/caracol.webp" id="imageCaracol" alt="caracol">
<img src="/src/img/Adventure-Time-Logo.png" id="logoAdventureTime" alt="logo hora de aventura">
</div>
<h1 class="tituloDaPagina">RPG</h1>
<div class="imageDoLivro">

<img src="/src/img/livro de rpg.png" id="livroDeRpg" alt="livro de rpg">
</div>
<p class="textoDotituloDaPagina">"Adventure Time: The RPG" is a role-playing game (RPG)
based on the popular cartoon series "Adventure Time". Developed by fans and adapted
to be played on tables, the RPG immerses participants in the colorful and magical world of Ooo, where
Unlikely heroes live incredible adventures.
</p>
</div>
<h2 class="subTituloWiki">Game System
</h2>
<p class="textoWiki">The game system is designed to be friendly to beginner players, but
it also offers enough depth to satisfy more experienced players. Generally, they are
six-sided dice (d6) are used to resolve actions, and character characteristics are
represented by statistics such as Strength, Dexterity, Intelligence and Charisma.</p>

<h2 class="subTituloWiki">Scenario</h2>
<p class="textoWiki">The RPG setting reflects the post-apocalyptic world of Ooo, inhabited by characters
such as Finn the Human, Jake the Dog, Princess Bubblegum, Marceline, Ice King and many others. The master
Game Manager (GM) creates narratives and challenges for players to explore, incorporating elements
characteristic of the series, such as the Land of Lump, the Land of Sweets, the Land of Fire and the Frozen Kingdom.</p>

<h2 class="subTituloWiki">Character creation</h2>
<hr class="linhaSubTituloWiki">


<h3 class="subTituloDoSubTituloWiki">Breeds</h3>
<p class="subTextoWiki">Players have the option to choose between different races that populate the
intriguing world of Ooo. From adaptable and versatile humans, to magical creatures like elves and
unicorns, even vampires with supernatural abilities and anthropomorphic dogs endowed with
metamorphosis, race choices influence the unique characteristics and abilities of each
character. Robots and artificial beings are also part of the options, offering physical resistance
enhanced and advanced technological skills. Each race brings with it a distinct narrative and
contributes to the diversity of experiences that players can explore as they embark on their
own adventures in Ooo.</p>

<h3 class="subTituloDoSubTituloWiki">Classes</h3>
<p class="subTextoWiki">Classes in "Adventure Time: The RPG" offer players opportunities
ways to shape your characters and play specific roles within the enchanting universe
from Ooo. From the courageous Grass Sword Adventurers, skilled in the art of hand-to-hand fighting,
to Sweet Magic Wizards, masters at casting sweet and powerful spells, the options are diverse.
The Explorers of the Shadowland deal with supernatural mysteries, while the Engineers
Technologists create advanced inventions. The Musical Bards of Ooo use music as a weapon,
inspiring allies and disorienting enemies. Each class features unique abilities, allowing
allows players to personalize their journeys, contributing to the richness and diversity of stories
that can be experienced in the exciting world of Adventure Time.
</p>

<h2 class="subTituloWiki">Powers</h2>
<hr class="linhaSubTituloWiki">


<h3 class="subTituloDoSubTituloWiki">Magic</h3>
<p class="subTextoWiki">Magic plays a crucial role, offering players a variety of
magical powers inspired by the enchanting world of Ooo. Ice Magic allows you to control ice,
Sweet Magic involves the manipulation of enchanted sweets, Elemental Magic grants control over
natural elements, and Shadow Magic allows the manipulation of shadows for various purposes.
Each type of magic provides characters with unique abilities and magical strategies to
face the challenges and mysteries that permeate the extraordinary universe of Adventure Time.</p>

<h3 class="subTituloDoSubTituloWiki">Skills</h3>
<p class="subTextoWiki">Skills are the distinct abilities that characters can develop
to shape your journeys in the magical world of Ooo. From the versatility of Jake's Transformation,
inspired by Jake the Dog, to the Candy Manipulation ability, associated with Princess Bubblegum, which
allows you to create enchanted sweets, each skill offers a unique dimension to the character. Achievements
Musicals enable the Musical Bards of Ooo to use music as a weapon, while Master of
Technology grants the ability to create advanced technological devices. These skills
provide players with a wide range of strategic options to face challenges,
contributing to the diversity and personalization of the stories experienced in this captivating RPG.</p>



<div class="parteDeContribuir">
<img src="/src/img/litch vs finn.jpg" id="litchVsFinn" alt="litch vs finn">
<div>
    <h2 class="tituloContribuir">Adventures and Quests</h2>
    <p class="textContribuir">The Game Master guides players through exciting adventures,
    which may include saving Princess Bubblegum from an imminent threat, exploring dungeons
    mysterious or help iconic characters solve their problems. Missions may vary
    from simple tasks to epic challenges to save the entire kingdom.</p>

    <h2 class="tituloContribuir">Art and Style</h2>
    <p class="textContribuir">The Adventure Time RPG often incorporates the unique style and
    colorful artwork from the animated series. Game materials such as character sheets, dice, and
    maps often feature vibrant illustrations of famous characters and locations from
    Ooo.</p>
</div>
</div>`

document.getElementById("osDaEsquerda").innerHTML = english;

document.getElementById("personagensPrinc").innerHTML = "Main characters"

document.getElementById("pesquisadinha").placeholder = "Search"
document.getElementById("nomePaginaPrin").innerHTML = "Main page";
document.getElementById("nomePersonagens").innerHTML = "Characters";
document.getElementById("nomeObjetos").innerHTML = "Objects";
document.getElementById("nomeEpisodios").innerHTML = "Episodes";
document.getElementById("outrasLinguas").innerHTML = "Other languages";

document.getElementById("englishPf").classList.add("linguasDif")
document.getElementById("portuguesPf").classList.remove("linguasDif")
}

function abrirEFecharPagina() {
    if (document.getElementById('idPersonagens').style.display == 'flex') {
        document.getElementById('idPagPag').style.backgroundColor = '#934040'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    } else {
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#934040'
        document.getElementById('idPagin').style.display = 'flex'
        document.getElementById('idPersonagens').style.display = 'flex'
        document.getElementById('idRPG').style.display = 'flex'
        document.getElementById('idObjetos').style.display = 'flex'
        document.getElementById('idEpisodios').style.display = 'flex'
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#934040'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#934040'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharLinksOficiais() {
    if (document.getElementById('idSiteOficial').style.display == 'flex') {
        document.getElementById('idlinksOfi').style.backgroundColor = '#934040'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
    } else {
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#934040'
        document.getElementById('idSiteOficial').style.display = 'flex'
        document.getElementById('idMercadoriaOficial').style.display = 'flex'
        document.getElementById('idReddit').style.display = 'flex'
        document.getElementById('idFrederatorStudios').style.display = 'flex'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#934040'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#934040'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharOutraslínguas() {
    if (document.getElementById('idEnglish').style.display == 'flex') {
        document.getElementById('idOutrasLi').style.backgroundColor = '#934040'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    } else {
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#934040'
        document.getElementById('idEnglish').style.display = 'flex'
        document.getElementById('idPortugues').style.display = 'flex'
        
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#934040'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#934040'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    }
}

function fecharTudo(){
    //linguas
    document.getElementById('idOutrasLi').style.backgroundColor = '#934040'
    document.getElementById('idEnglish').style.display = 'none'
    document.getElementById('idPortugues').style.display = 'none'
    //links Oficiais
    document.getElementById('idlinksOfi').style.backgroundColor = '#934040'
    document.getElementById('idSiteOficial').style.display = 'none'
    document.getElementById('idMercadoriaOficial').style.display = 'none'
    document.getElementById('idReddit').style.display = 'none'
    document.getElementById('idFrederatorStudios').style.display = 'none'
    // pagina
    document.getElementById('idPagPag').style.backgroundColor = '#934040'
    document.getElementById('idPagin').style.display = 'none'
    document.getElementById('idPersonagens').style.display = 'none'
    document.getElementById('idRPG').style.display = 'none'
    document.getElementById('idObjetos').style.display = 'none'
    document.getElementById('idEpisodios').style.display = 'none'
} 