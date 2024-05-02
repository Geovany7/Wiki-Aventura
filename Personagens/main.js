function abrirEFecharPagina() {
    if (document.getElementById('idPersonagens').style.display == 'flex') {
        document.getElementById('idPagPag').style.backgroundColor = '#005843'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    } else {
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#005843'
        document.getElementById('idPagin').style.display = 'flex'
        document.getElementById('idPersonagens').style.display = 'flex'
        document.getElementById('idRPG').style.display = 'flex'
        document.getElementById('idObjetos').style.display = 'flex'
        document.getElementById('idEpisodios').style.display = 'flex'
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#005843'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#005843'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharLinksOficiais() {
    if (document.getElementById('idSiteOficial').style.display == 'flex') {
        document.getElementById('idlinksOfi').style.backgroundColor = '#005843'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
    } else {
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#005843'
        document.getElementById('idSiteOficial').style.display = 'flex'
        document.getElementById('idMercadoriaOficial').style.display = 'flex'
        document.getElementById('idReddit').style.display = 'flex'
        document.getElementById('idFrederatorStudios').style.display = 'flex'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#005843'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#005843'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharOutraslínguas() {
    if (document.getElementById('idEnglish').style.display == 'flex') {
        document.getElementById('idOutrasLi').style.backgroundColor = '#005843'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    } else {
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#005843'
        document.getElementById('idEnglish').style.display = 'flex'
        document.getElementById('idPortugues').style.display = 'flex'
        
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#005843'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#005843'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    }
}

function fecharTudo(){
    //linguas
    document.getElementById('idOutrasLi').style.backgroundColor = '#005843'
    document.getElementById('idEnglish').style.display = 'none'
    document.getElementById('idPortugues').style.display = 'none'
    //links Oficiais
    document.getElementById('idlinksOfi').style.backgroundColor = '#005843'
    document.getElementById('idSiteOficial').style.display = 'none'
    document.getElementById('idMercadoriaOficial').style.display = 'none'
    document.getElementById('idReddit').style.display = 'none'
    document.getElementById('idFrederatorStudios').style.display = 'none'
    // pagina
    document.getElementById('idPagPag').style.backgroundColor = '#005843'
    document.getElementById('idPagin').style.display = 'none'
    document.getElementById('idPersonagens').style.display = 'none'
    document.getElementById('idRPG').style.display = 'none'
    document.getElementById('idObjetos').style.display = 'none'
    document.getElementById('idEpisodios').style.display = 'none'
} 

const personagem1 = {
    nome: "Finn",
    img: "/src/img/Happyfinn.jpg",
    divId: "localDoPersonagemFinn"
};

const personagem2 = {
    nome: "Jake",
    img: "/src/img/jake.jpg",
    divId: "localDoPersonagemJake"
};

const personagem3 = {
    nome: "Jujuba",
    img: "/src/img/Jujuba.jpg",
    divId: "localDoPersonagemJujuba"
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

let numero1 = Math.floor(Math.random() * 5);
let numero2 = Math.floor(Math.random() * 5);
let numero3 = Math.floor(Math.random() * 5);
let numero4 = Math.floor(Math.random() * 5);
let numero5 = Math.floor(Math.random() * 5);
if (numero1 == numero2) {
    do {
        numero2 = Math.floor(Math.random() * 5);

    } while (numero1 == numero2);
}

if (numero1 == numero3 || numero2 == numero3) {
    do {
        numero3 = Math.floor(Math.random() * 5);
    } while (numero1 == numero3 || numero2 == numero3);
};

if (numero1 == numero4 || numero2 == numero4 || numero3 == numero4) {
    do {
        numero4 = Math.floor(Math.random() * 5);
    } while (numero1 == numero4 || numero2 == numero4 || numero3 == numero4);
};

if (numero1 == numero5 || numero2 == numero5 || numero3 == numero5 || numero4 == numero5) {
    do {
        numero5 = Math.floor(Math.random() * 5);
    } while (numero1 == numero5 || numero2 == numero5 || numero3 == numero5 || numero4 == numero5);
};
let numeros = [numero1, numero2, numero3, numero4, numero5]
console.log(numeros)

for (let i = 0; i < 5; i++) {


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