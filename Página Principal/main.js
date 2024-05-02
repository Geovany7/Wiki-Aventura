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



function portugues(){
const portugues = `
<div class="partePrincipalWikiCima" id="partePrincipalWikiCima">
<div class="imageWikiCima">
<img src="/src/img/Finn e jake.png" id="imageFinnEJake" alt="Finn e Jake">
<img src="/src/img/logo hora de aventura.png" id="logoHoraDeAventura" alt="logo hora de aventura">
</div>
<h1 class="tituloDaPagina" id="paginaPrincipal">Página principal</h1>
<p class="textoDotituloDaPagina">Bem-vindo à Wiki de Hora de Aventura! <br><br>






Embarque conosco numa jornada fascinante pelo mágico e pós-apocalíptico mundo de Ooo, onde a
diversão e a aventura entrelaçam-se em histórias inesquecíveis! Aqui, você encontrará a sua
fonte
definitiva para tudo relacionado a Hora de Aventura, a série de animação que transcendeu
fronteiras
e cativou corações ao redor do mundo.

</p>
</div>

<h2 class="subTituloWiki" >Sobre Hora de Aventura</h2>
<p class="textoWiki">Hora de Aventura, criada por Pendleton Ward, é uma jornada épica que segue as
incríveis aventuras de Finn, o Humano, e Jake, o Cão. Juntos, eles enfrentam desafios
emocionantes,
exploram terras mágicas e interagem com uma infinidade de personagens únicos. A série, conhecida
por
sua narrativa envolvente, comédia peculiar e temas profundos, transcendeu as expectativas,
tornando-se um fenômeno cultural.</p>

<h2 class="subTituloWiki">Navegue Pela Wiki</h2>
<hr class="linhaSubTituloWiki">
<p class="textoWiki">Na nossa Wiki, você encontrará uma vasta coleção de informações sobre
personagens,
episódios, locais e muito mais. Seja você um fã de longa data ou um novo aventureiro em Ooo, há
algo
para todos. Explore as páginas dedicadas aos seus personagens favoritos, descubra os enredos
fascinantes dos episódios e mergulhe nos segredos ocultos deste mundo extraordinário.</p>

<h3 class="subTituloDoSubTituloWiki">Personagens</h3>
<p class="subTextoWiki">Explore páginas dedicadas aos fascinantes habitantes de Ooo. Desde Finn, o
Humano, e Jake, o Cão, até personagens secundários e vilões intrigantes, descubra as histórias,
desenvolvimentos e curiosidades por trás de cada um.</p>

<h3 class="subTituloDoSubTituloWiki">Objetos</h3>
<p class="subTextoWiki">Mergulhe nas descrições e origens de objetos mágicos que desempenham papéis
cruciais na trama. Desde a Espada de Grôl, a Coroa de Gunters até o Enquirídio, descubra como esses
artefatos mágicos influenciam o curso das aventuras em Ooo.
</p>

<h3 class="subTituloDoSubTituloWiki">RPG</h3>
<p class="subTextoWiki">Para os fãs que desejam levar a magia de Hora de Aventura para suas mesas de
jogo, oferecemos informações detalhadas sobre a adaptação para RPG de mesa. Descubra regras,
cenários, e dicas para incorporar a essência única de Ooo em suas próprias sessões de jogo.
</p>

<h3 class="subTituloDoSubTituloWiki">Episódios</h3>
<p class="subTextoWiki">Navegue por uma lista abrangente de episódios, desde os emocionantes inícios até
os finais surpreendentes. Cada página fornece uma visão aprofundada dos enredos, desenvolvimentos de
personagens e momentos marcantes que definem a rica narrativa de Hora de Aventura.
</p>

<div class="parteDoConteudo">
<div class="divDaParteDoConteudo" id="divAGalera">
    <a href="/Personagens/personagens.html" class="linkParaAsPaginas">
        <img src="/src/img/A galera.jpg" id="aGalera" class="imageDaParteDoConteudo"
            alt="A galera de hora de aventura">
        <p class="textoDaParteDoConteudo"><a href="/Personagens/personagens.html"
                class="linkParaAsPaginas">Personagens</a></p>
    </a>
</div>
<div class="divDaParteDoConteudo">
    <a href="/Objetos/objetos.html">
        <img src="/src/img/espadas do finn.jpg" class="imageDaParteDoConteudo"
            alt="espadas do finn">
        <p class="textoDaParteDoConteudo"><a href="/Objetos/objetos.html"
                class="linkParaAsPaginas">Objetos</a></p>
    </a>
</div>
<div class="divDaParteDoConteudo" id="divLivroDeRpg">
    <a href="/RPG/rpg.html" class="linkParaAsPaginas">
        <img src="/src/img/livro de rpg.png" id="livroDeRpg" class="imageDaParteDoConteudo"
            alt="livro de rpg">
        <p class="textoDaParteDoConteudo"><a href="/RPG/rpg.html" class="linkParaAsPaginas">RPG</a>
        </p>
    </a>
</div>
<div class="divDaParteDoConteudo">
    <a href="/Episódios/episodios.html" class="linkParaAsPaginas">
        <img src="/src/img/piloto.webp" class="imageDaParteDoConteudo" alt="Episódios">
        <p class="textoDaParteDoConteudo"><a href="/Episódios/episodios.html"
                class="linkParaAsPaginas">Episódios</p>
    </a>
</div>


</div>

<div class="parteDeContribuir">
<img src="/src/img/finn dinheiro.jpg" id="finnDinheiro" alt="finn dinheiro">
<div>
    <h2 class="tituloContribuir">Como Contribuir</h2>
    <p class="textContribuir">Quer fazer parte da construção deste reino de conhecimento? Sinta-se à
        vontade para
        contribuir! Adoramos receber informações novas, teorias emocionantes e detalhes
        interessantes sobre Hora de Aventura. Juntos, podemos criar uma fonte abrangente e
        envolvente para todos os fãs.</p>
</div>
</div>`

document.getElementById('osDaEsquerda').innerHTML = portugues;

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
<img src="/src/img/Finn e jake.png" id="imageFinnEJake" alt="Finn e Jake">
<img src="/src/img/Adventure-Time-Logo.png" id="logoAdventureTime" alt="logo hora de aventura">
</div>
<h1 class="tituloDaPagina" id="paginaPrincipal">Main page</h1>
<p class="textoDotituloDaPagina" id="Bem-vindo">Welcome to the Adventure Time Wiki! <br><br>






Embark with us on a fascinating journey through the magical, post-apocalyptic world of Ooo, where
fun and adventure intertwine in unforgettable stories! Here, you will find your
source
definitive guide to everything related to Adventure Time, the animated series that transcended
borders
and captivated hearts around the world.

</p>
</div>
<h2 class="subTituloWiki" >About Adventure Time</h2>
<p class="textoWiki">Adventure Time, created by Pendleton Ward, is an epic journey that follows the
incredible adventures of Finn the Human and Jake the Dog. Together they face challenges
exciting,
explore magical lands and interact with a multitude of unique characters. The series, known
per
its engaging narrative, quirky comedy and deep themes, transcended expectations,
becoming a cultural phenomenon.</p>

<h2 class="subTituloWiki">Browse the Wiki</h2>
<hr class="linhaSubTituloWiki">
<p class="textoWiki">On our Wiki, you will find a vast collection of information about
characters,
episodes, locations and more. Whether you're a long-time fan or a new adventurer in Ooo, there's
something
for all. Explore the pages dedicated to your favorite characters, discover the plots
of fascinating episodes and delve into the hidden secrets of this extraordinary world.</p>

<h3 class="subTituloDoSubTituloWiki">Characters</h3>
<p class="subTextoWiki">Explore pages dedicated to Ooo's fascinating inhabitants. Since Finn, the
Human, and Jake the Dog, to supporting characters and intriguing villains, discover the stories,
developments and curiosities behind each one.</p>

<h3 class="subTituloDoSubTituloWiki">Objects</h3>
<p class="subTextoWiki">Delve into the descriptions and origins of magical objects that play roles
crucial to the plot. From the Sword of Grôl, the Crown of Gunters to the Enchiridion, discover how these
Magical artifacts influence the course of adventures in Ooo.
</p>

<h3 class="subTituloDoSubTituloWiki">RPG</h3>
<p class="subTextoWiki">For fans who want to bring the magic of Adventure Time to their table
game, we offer detailed information about the tabletop RPG adaptation. Discover rules,
scenarios, and tips for incorporating the unique essence of Ooo into your own gaming sessions.
</p>

<h3 class="subTituloDoSubTituloWiki">Episodes</h3>
<p class="subTextoWiki">Browse a comprehensive list of episodes, from exciting beginnings to
the surprising endings. Each page provides an in-depth look at plots, developments,
characters and memorable moments that define the rich narrative of Adventure Time.
</p>

<div class="parteDoConteudo">
<div class="divDaParteDoConteudo" id="divAGalera">
    <a href="/Personagens/personagens.html" class="linkParaAsPaginas">
        <img src="/src/img/A galera.jpg" id="aGalera" class="imageDaParteDoConteudo"
            alt="A galera de hora de aventura">
        <p class="textoDaParteDoConteudo"><a href="/Personagens/personagens.html"
                class="linkParaAsPaginas">Characters</a></p>
    </a>
</div>
<div class="divDaParteDoConteudo">
    <a href="/Objetos/objetos.html">
        <img src="/src/img/espadas do finn.jpg" class="imageDaParteDoConteudo"
            alt="espadas do finn">
        <p class="textoDaParteDoConteudo"><a href="/Objetos/objetos.html"
                class="linkParaAsPaginas">Objects</a></p>
    </a>
</div>
<div class="divDaParteDoConteudo" id="divLivroDeRpg">
    <a href="/RPG/rpg.html" class="linkParaAsPaginas">
        <img src="/src/img/livro de rpg.png" id="livroDeRpg" class="imageDaParteDoConteudo"
            alt="livro de rpg">
        <p class="textoDaParteDoConteudo"><a href="/RPG/rpg.html" class="linkParaAsPaginas">RPG</a>
        </p>
    </a>
</div>
<div class="divDaParteDoConteudo">
    <a href="/Episódios/episodios.html" class="linkParaAsPaginas">
        <img src="/src/img/piloto.webp" class="imageDaParteDoConteudo" alt="Episódios">
        <p class="textoDaParteDoConteudo"><a href="/Episódios/episodios.html"
                class="linkParaAsPaginas">Episodes</p>
    </a>
</div>


</div>

<div class="parteDeContribuir">
<img src="/src/img/finn dinheiro.jpg" id="finnDinheiro" alt="finn dinheiro">
<div>
    <h2 class="tituloContribuir">How to Contribute</h2>
    <p class="textContribuir">Do you want to be part of building this kingdom of knowledge? Feel at
    willingness to
    contribute! We love hearing new information, exciting theories and details
    interesting things about Adventure Time. Together we can create a comprehensive and
    engaging for all fans.</p>
</div>
</div>`;
document.getElementById("osDaEsquerda").innerHTML = english;

document.getElementById("personagensPrinc").innerHTML = "Main characters";

document.getElementById("pesquisadinha").placeholder = "Search";

document.getElementById("nomePaginaPrin").innerHTML = "Main page";
document.getElementById("nomePersonagens").innerHTML = "Characters";
document.getElementById("nomeObjetos").innerHTML = "Objects";
document.getElementById("nomeEpisodios").innerHTML = "Episodes";
document.getElementById("outrasLinguas").innerHTML = "Other languages";

document.getElementById("englishPf").classList.add("linguasDif");
document.getElementById("portuguesPf").classList.remove("linguasDif");


};



let numero1 = Math.floor(Math.random()* 5);
let numero2 = Math.floor(Math.random()* 5);
let numero3 = Math.floor(Math.random()* 5);
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
let numeros = [numero1, numero2, numero3]
console.log(numeros)

for (let i = 0; i < 3; i++){ 
    
    
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

function abrirEFecharPagina() {
    if (document.getElementById('idPersonagens').style.display == 'flex') {
        document.getElementById('idPagPag').style.backgroundColor = '#3F6E6A'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    } else {
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#3F6E6A'
        document.getElementById('idPagin').style.display = 'flex'
        document.getElementById('idPersonagens').style.display = 'flex'
        document.getElementById('idRPG').style.display = 'flex'
        document.getElementById('idObjetos').style.display = 'flex'
        document.getElementById('idEpisodios').style.display = 'flex'
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#3F6E6A'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#3F6E6A'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharLinksOficiais() {
    if (document.getElementById('idSiteOficial').style.display == 'flex') {
        document.getElementById('idlinksOfi').style.backgroundColor = '#3F6E6A'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
    } else {
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#3F6E6A'
        document.getElementById('idSiteOficial').style.display = 'flex'
        document.getElementById('idMercadoriaOficial').style.display = 'flex'
        document.getElementById('idReddit').style.display = 'flex'
        document.getElementById('idFrederatorStudios').style.display = 'flex'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#3F6E6A'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#3F6E6A'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharOutraslínguas() {
    if (document.getElementById('idEnglish').style.display == 'flex') {
        document.getElementById('idOutrasLi').style.backgroundColor = '#3F6E6A'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    } else {
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#3F6E6A'
        document.getElementById('idEnglish').style.display = 'flex'
        document.getElementById('idPortugues').style.display = 'flex'
        
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#3F6E6A'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#3F6E6A'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    }
}

function fecharTudo(){
    //linguas
    document.getElementById('idOutrasLi').style.backgroundColor = '#3F6E6A'
    document.getElementById('idEnglish').style.display = 'none'
    document.getElementById('idPortugues').style.display = 'none'
    //links Oficiais
    document.getElementById('idlinksOfi').style.backgroundColor = '#3F6E6A'
    document.getElementById('idSiteOficial').style.display = 'none'
    document.getElementById('idMercadoriaOficial').style.display = 'none'
    document.getElementById('idReddit').style.display = 'none'
    document.getElementById('idFrederatorStudios').style.display = 'none'
    // pagina
    document.getElementById('idPagPag').style.backgroundColor = '#3F6E6A'
    document.getElementById('idPagin').style.display = 'none'
    document.getElementById('idPersonagens').style.display = 'none'
    document.getElementById('idRPG').style.display = 'none'
    document.getElementById('idObjetos').style.display = 'none'
    document.getElementById('idEpisodios').style.display = 'none'
} 