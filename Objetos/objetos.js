function abrirEFecharPagina() {
    if (document.getElementById('idPersonagens').style.display == 'flex') {
        document.getElementById('idPagPag').style.backgroundColor = '#eeb600'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    } else {
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#eeb600'
        document.getElementById('idPagin').style.display = 'flex'
        document.getElementById('idPersonagens').style.display = 'flex'
        document.getElementById('idRPG').style.display = 'flex'
        document.getElementById('idObjetos').style.display = 'flex'
        document.getElementById('idEpisodios').style.display = 'flex'
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#eeb600'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#eeb600'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharLinksOficiais() {
    if (document.getElementById('idSiteOficial').style.display == 'flex') {
        document.getElementById('idlinksOfi').style.backgroundColor = '#eeb600'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
    } else {
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#eeb600'
        document.getElementById('idSiteOficial').style.display = 'flex'
        document.getElementById('idMercadoriaOficial').style.display = 'flex'
        document.getElementById('idReddit').style.display = 'flex'
        document.getElementById('idFrederatorStudios').style.display = 'flex'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#eeb600'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#eeb600'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharOutraslínguas() {
    if (document.getElementById('idEnglish').style.display == 'flex') {
        document.getElementById('idOutrasLi').style.backgroundColor = '#eeb600'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    } else {
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#eeb600'
        document.getElementById('idEnglish').style.display = 'flex'
        document.getElementById('idPortugues').style.display = 'flex'
        
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#eeb600'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#eeb600'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    }
}

function fecharTudo(){
    //linguas
    document.getElementById('idOutrasLi').style.backgroundColor = '#eeb600'
    document.getElementById('idEnglish').style.display = 'none'
    document.getElementById('idPortugues').style.display = 'none'
    //links Oficiais
    document.getElementById('idlinksOfi').style.backgroundColor = '#eeb600'
    document.getElementById('idSiteOficial').style.display = 'none'
    document.getElementById('idMercadoriaOficial').style.display = 'none'
    document.getElementById('idReddit').style.display = 'none'
    document.getElementById('idFrederatorStudios').style.display = 'none'
    // pagina
    document.getElementById('idPagPag').style.backgroundColor = '#eeb600'
    document.getElementById('idPagin').style.display = 'none'
    document.getElementById('idPersonagens').style.display = 'none'
    document.getElementById('idRPG').style.display = 'none'
    document.getElementById('idObjetos').style.display = 'none'
    document.getElementById('idEpisodios').style.display = 'none'
} 

const objectA1 = {
    img: '/src/img/objetos/Abajur.webp',
    titulo: 'Abajur'
};

const objectA2 = {
    img: '/src/img/objetos/Amuleto da Noitosfera.webp',
    titulo: 'Amuleto da Noitosfera'
};

const objectA3 = {
    img: '/src/img/objetos/Antídoto dos Caroços.webp',
    titulo: 'Antídoto dos Caroços'
};

const objectA4 = {
    img: '/src/img/objetos/Armadura Mágica de Zeldron.webp',
    titulo: 'Armadura Mágica de Zeldron'
};

const objectA5 = {
    img: '/src/img/objetos/Armaduras do Neptr.webp',
    titulo: 'Armaduras do Neptr'
};

const objectA6 = {
    img: '/src/img/objetos/Assinatura de Calor (Filme).webp',
    titulo: 'Assinatura de Calor (Filme)'
};


const obejetosComLetraA = [objectA1, objectA2, objectA3, objectA4, objectA5, objectA6];
let tamanho = obejetosComLetraA.length


const objectB1 = {
    img: '/src/img/objetos/Baixo-Machado.webp',
    titulo: 'Baixo-Machado'
};

const objectB2 = {
    img: '/src/img/objetos/Bateria do Rei Gelado.webp',
    titulo: 'Bateria do Rei Gelado'
};

const objectB3 = {
    img: '/src/img/objetos/Bebe.webp',
    titulo: 'Bebe'
};

const objectB4 = {
    img: '/src/img/objetos/Bebida Doce.webp',
    titulo: 'Bebida Doce'
};

const objectB5 = {
    img: '/src/img/objetos/BMO.webp',
    titulo: 'BMO'
};

const objectB6 = {
    img: '/src/img/objetos/Bomba.webp',
    titulo: 'Bomba'
};

const objectB7 = {
    img: '/src/img/objetos/Bomba da Guerra dos Cogumelos.webp',
    titulo: 'Bomba da GDC'
};

const objectB8 = {
    img: '/src/img/objetos/Burla-ula Bola-ola.webp',
    titulo: 'Burla-ula Bola-ola'
};

const obejetosComLetraB = [objectB1, objectB2, objectB3, objectB4, objectB5, objectB6, objectB7, objectB8]


const objectC1 = {
    img: '/src/img/objetos/Camisetapb.webp',
    titulo: 'Camisa de Rock'
};

const objectC2 = {
    img: '/src/img/objetos/Caneca.webp',
    titulo: 'Caneca do Jake'
};

const objectC3 = {
    img: '/src/img/objetos/Lamb_Relic.webp',
    titulo: 'Carneiro de Porcelana'
};
const objectC4 = {
    img: "/src/img/objetos/Kompy's_Kastle.webp",
    titulo: 'Castelo de Kompy'
};
const objectC5 = {
    img: '/src/img/objetos/Catapulta.webp',
    titulo: 'Catapulta de Virilha'
};
const objectC6 = {
    img: '/src/img/objetos/Celular_da_Marc.webp',
    titulo: 'Celular da Marceline'
};
const objectC7 = {
    img: '/src/img/objetos/Chapéu de Finn.webp',
    titulo: 'Chapéu de Finn'
};

const objectC8 = {
    img: '/src/img/objetos/Chapéu de Fionna.webp',
    titulo: 'Chapéu de Fionna'
};

const objectC9 = {
    img: '/src/img/objetos/C-MO.webp',
    titulo: 'CMO'
};

const objectC10 = {
    img: '/src/img/objetos/Colher da Prosperidade.webp',
    titulo: 'Colher da Prosperidade'
};

const objectC11 = {
    img: '/src/img/objetos/Cometa_Catalizador.PNG.webp',
    titulo: 'Cometa Catalisado'
};

const objectC12 = {
    img: '/src/img/objetos/Coração de Demônio.webp',
    titulo: 'Coração de Demônio'
};

const objectC13 = {
    img: '/src/img/objetos/Coroa da Princesa Jujuba.webp',
    titulo: 'Coroa da Jujuba'
};

const objectC14 = {
    img: '/src/img/objetos/Crown.webp',
    titulo: 'Coroa do Rei Gelado'
};

const objectC15 = {
    img: '/src/img/objetos/Cristal do Futuro.webp',
    titulo: 'Cristal do Futuro'
};

const objectC16 = {
    img: '/src/img/objetos/Cristal do Padeiro.webp',
    titulo: 'Cristal do Padeiro'
};

const objectC17 = {
    img: '/src/img/objetos/Câmara Anti-gravitacional.webp',
    titulo: 'Câmara Anti-gravitacional'
};

const obejetosComLetraC = [objectC1, objectC2, objectC3, objectC4, objectC5, objectC6, objectC7, objectC8, objectC9, objectC10, objectC11, objectC12, objectC13, objectC14, objectC15, objectC16, objectC17];


console.log(objectC17.titulo.length)


function pagina1() {
    let somaTamanho = tamanho - 5
    let n = 0;
    let i = 0;
    let l = 0;
    let lugaresObjetos
    if (document.getElementById("pag1").style.cursor == "default"){

    }else{

    for (l = 0; l < 2; l++) {
        if (l == 0) {
            let letra = `<h2 class="letra" id="a" >Letra A</h2>`
            document.getElementById("objetosPorLetra").innerHTML = letra;
        }
        let linhaObjeto = `<div class="linhaDesObjetos" id="linhaDosObjetosA${l}">
    
    </div>`;

        n = n + 5
        document.getElementById("objetosPorLetra").innerHTML += linhaObjeto;

        let variasLinhas = ["linhaDosObjetosA0", "linhaDosObjetosA1"]

        for (i; i < n; i++) {
            if (obejetosComLetraA[i].titulo.length > 20){
                lugaresObjetos = `<div class="objetos" onclick='obA${i + 1}()'>
                <div class="imageDosObjetos imageMenor"><img src="${obejetosComLetraA[i].img}" class="image " alt="${obejetosComLetraA[i].titulo}"></div> 
                <p class="nomeDoObjetos">${obejetosComLetraA[i].titulo}</p>`
            } else{
            lugaresObjetos = `<div class="objetos" onclick='obA${i + 1}()'>
    <div class="imageDosObjetos"><img src="${obejetosComLetraA[i].img}" class="image" alt="${obejetosComLetraA[i].titulo}"></div> 
    <p class="nomeDoObjetos">${obejetosComLetraA[i].titulo}</p>
    </div>`;}

            if (i == 5) {
                n = n + somaTamanho - tamanho
            }

            document.getElementById(variasLinhas[l]).innerHTML += lugaresObjetos;

        }
    }

    tamanho = obejetosComLetraB.length
    somaTamanho = tamanho - 5
    n = 5;
    i = 0;



    for (l = 0; l < 2; l++) {
        if (l == 0) {
            let letraB = `<h2 class="letra" id="b">Letra B</h2>`
            document.getElementById("objetosPorLetra").innerHTML += letraB;
        };
        let linhaObjetoB = `<div class="linhaDesObjetos" id="linhaDosObjetosB${l}">
    
    </div>`;


        document.getElementById("objetosPorLetra").innerHTML += linhaObjetoB;

        const variasLinhasB = ["linhaDosObjetosB0", "linhaDosObjetosB1"]

        for (i; i < n; i++) {
            const lugaresObjetosB = `<div class="objetos" onclick='obB${i + 1}()'>
    <div class="imageDosObjetos"><img src="${obejetosComLetraB[i].img}" class="image" alt="${obejetosComLetraB[i].titulo}"></div> 
    <p class="nomeDoObjetos">${obejetosComLetraB[i].titulo}</p>
    </div>`;


            document.getElementById(variasLinhasB[l]).innerHTML += lugaresObjetosB;

        };
        if (i == 5) {
            n = n + somaTamanho
        };
    };

    n = 5;
    i = 0;
    let lugaresObjetosC
    for (l = 0; l < 4; l++) {
        if (l == 0) {
            let letraC = `<h2 class="letra" id="c">Letra C</h2>`
            document.getElementById("objetosPorLetra").innerHTML += letraC;
        };
        let linhaObjetoC = `<div class="linhaDesObjetos" id="linhaDosObjetosC${l}">
    
    </div>`;


        document.getElementById("objetosPorLetra").innerHTML += linhaObjetoC;

        const variasLinhasC = ["linhaDosObjetosC0", "linhaDosObjetosC1", "linhaDosObjetosC2", "linhaDosObjetosC3"]

        for (i; i < n; i++) {
            if (obejetosComLetraC[i].titulo.length > 20){
                lugaresObjetosC = `<div class="objetos" onclick='obC${i + 1}()'>
    <div class="imageDosObjetos imageMenor"><img src="${obejetosComLetraC[i].img}" class="image " alt="${obejetosComLetraC[i].titulo}"></div> 
    <p class="nomeDoObjetos">${obejetosComLetraC[i].titulo}</p>
    </div>`;
            }else{
           lugaresObjetosC = `<div class="objetos" onclick='obC${i + 1}()'>
    <div class="imageDosObjetos"><img src="${obejetosComLetraC[i].img}" class="image" alt="${obejetosComLetraC[i].titulo}"></div> 
    <p class="nomeDoObjetos">${obejetosComLetraC[i].titulo}</p>
    </div>`;}


            document.getElementById(variasLinhasC[l]).innerHTML += lugaresObjetosC;

        };
        if (i == n) {
            if (n == 15) {
                n = n + 2
            } else {
                n = n + 5
            }
        };
    };

    location.href = "#inicio";
    document.getElementById("pag1").style.color = "white";
    document.getElementById("pag1").style.cursor = "url(/src/img/GoldenswordLogo471.png), default";
    document.getElementById("setaEsquerda").style.color = "#3c3c3c";
    document.getElementById("setaEsquerda").style.fontWeight = "900"
    
    document.getElementById("setaEsquerda").style.cursor = "url(/src/img/GoldenswordLogo471.png), default";
    document.getElementById("pag2").style.color = "black";
    document.getElementById("pag2").style.cursor = "url(/src/img/espada\ sem\ logoc.png), pointer";
    document.getElementById("setaDireita").style.color= "black";
    document.getElementById("setaDireita").style.fontWeight = "900"
    
    document.getElementById("setaDireita").style.cursor = "url(/src/img/espada\ sem\ logoc.png), pointer";}
}
function obA1() {
    localStorage.img = obejetosComLetraA[0].img;
    localStorage.titulo = obejetosComLetraA[0].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
}

function obA2() {
    localStorage.img = obejetosComLetraA[1].img;
    localStorage.titulo = obejetosComLetraA[1].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
}

function obA3() {
    localStorage.img = obejetosComLetraA[2].img;
    localStorage.titulo = obejetosComLetraA[2].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
}

function obA4() {
    localStorage.img = obejetosComLetraA[3].img;
    localStorage.titulo = obejetosComLetraA[3].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
}

function obA5() {
    localStorage.img = obejetosComLetraA[4].img;
    localStorage.titulo = obejetosComLetraA[4].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
}

function obA6() {
    localStorage.img = obejetosComLetraA[5].img;
    localStorage.titulo = obejetosComLetraA[5].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
}

// -----------------------------------------------------------------------



function obB1() {
    localStorage.img = obejetosComLetraB[0].img;
    localStorage.titulo = obejetosComLetraB[0].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obB2() {
    localStorage.img = obejetosComLetraB[1].img;
    localStorage.titulo = obejetosComLetraB[1].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obB3() {
    localStorage.img = obejetosComLetraB[2].img;
    localStorage.titulo = obejetosComLetraB[2].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};
function obB4() {
    localStorage.img = obejetosComLetraB[3].img;
    localStorage.titulo = obejetosComLetraB[3].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obB5() {
    localStorage.img = obejetosComLetraB[4].img;
    localStorage.titulo = obejetosComLetraB[4].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obB6() {
    localStorage.img = obejetosComLetraB[5].img;
    localStorage.titulo = obejetosComLetraB[5].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obB7() {
    localStorage.img = obejetosComLetraB[6].img;
    localStorage.titulo = obejetosComLetraB[6].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

// ---------------------------------------------------------------------------------------




function obC1() {
    localStorage.img = obejetosComLetraC[0].img;
    localStorage.titulo = obejetosComLetraC[0].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC2() {
    localStorage.img = obejetosComLetraC[1].img;
    localStorage.titulo = obejetosComLetraC[1].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC3() {
    localStorage.img = obejetosComLetraC[2].img;
    localStorage.titulo = obejetosComLetraC[2].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};
function obC4() {
    localStorage.img = obejetosComLetraC[3].img;
    localStorage.titulo = obejetosComLetraC[3].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC5() {
    localStorage.img = obejetosComLetraC[4].img;
    localStorage.titulo = obejetosComLetraC[4].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC6() {
    localStorage.img = obejetosComLetraC[5].img;
    localStorage.titulo = obejetosComLetraC[5].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC7() {
    localStorage.img = obejetosComLetraC[6].img;
    localStorage.titulo = obejetosComLetraC[6].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC8() {
    localStorage.img = obejetosComLetraC[7].img;
    localStorage.titulo = obejetosComLetraC[7].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC9() {
    localStorage.img = obejetosComLetraC[8].img;
    localStorage.titulo = obejetosComLetraC[8].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC10() {
    localStorage.img = obejetosComLetraC[9].img;
    localStorage.titulo = obejetosComLetraC[9].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC11() {
    localStorage.img = obejetosComLetraC[10].img;
    localStorage.titulo = obejetosComLetraC[10].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC12() {
    localStorage.img = obejetosComLetraC[11].img;
    localStorage.titulo = obejetosComLetraC[11].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};
function obC13() {
    localStorage.img = obejetosComLetraC[12].img;
    localStorage.titulo = obejetosComLetraC[12].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};
function obC14() {
    localStorage.img = obejetosComLetraC[13].img;
    localStorage.titulo = obejetosComLetraC[13].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};
function obC15() {
    localStorage.img = obejetosComLetraC[14].img;
    localStorage.titulo = obejetosComLetraC[14].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};
function obC16() {
    localStorage.img = obejetosComLetraC[15].img;
    localStorage.titulo = obejetosComLetraC[15].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obC17() {
    localStorage.img = obejetosComLetraC[16].img;
    localStorage.titulo = obejetosComLetraC[16].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

//----------------------------------------------

const objectD1 = {
    img: '/src/img/objetos/Daniel Gatão.webp',
    titulo: 'Daniel Gatão'
};

const objectD2 = {
    img: '/src/img/objetos/Dirigível do Rei de Ooo.webp',
    titulo: 'Dirigível do Rei de Ooo'
};

const objectD3 = {
    img: '/src/img/objetos/Diário da Marceline.webp',
    titulo: 'Diário da Marceline'
};

const objectD4 = {
    img: '/src/img/objetos/Diário do Rei Gelado.webp',
    titulo: 'Diário do Rei Gelado'
};

const objectD5 = {
    img: '/src/img/objetos/DMO.webp',
    titulo: 'DMO'
};

const objectD6 = {
    img: '/src/img/objetos/Drones.webp',
    titulo: 'Drones'
};

const obejetosComLetraD = [objectD1, objectD2, objectD3, objectD4, objectD5, objectD6]
tamanho = obejetosComLetraD.length
somaTamanho = tamanho - 5

function pagina2() {
    let somaTamanho = tamanho - 5
    let n = 5;
    let i = 0;
    let l = 0;
    if (document.getElementById("pag2").style.cursor == "default"){
    }else{
    for (l = 0; l < 2; l++) {
        if (l == 0) {
            let letraD = `<h2 class="letra" id="d">Letra D</h2>`
            document.getElementById("objetosPorLetra").innerHTML = letraD;
        };
        let linhaObjetoD = `<div class="linhaDesObjetos" id="linhaDosObjetosD${l}">
    
    </div>`;


        document.getElementById("objetosPorLetra").innerHTML += linhaObjetoD;

        const variasLinhasD = ["linhaDosObjetosD0", "linhaDosObjetosD1"]

        for (i; i < n; i++) {
            const lugaresObjetosD = `<div class="objetos" onclick='obD${i + 1}()'>
    <div class="imageDosObjetos"><img src="${obejetosComLetraD[i].img}" class="image" alt="${obejetosComLetraD[i].titulo}"></div> 
    <p class="nomeDoObjetos">${obejetosComLetraD[i].titulo}</p>
    </div>`;


            document.getElementById(variasLinhasD[l]).innerHTML += lugaresObjetosD;

        };

        if (i == n) {
            n = n + 1


        };
    };

    
    location.href = "#inicio";
    document.getElementById("pag1").style.color = "black";
    document.getElementById("pag1").style.cursor = "url(/src/img/espada\ sem\ logoc.png), pointer";
    document.getElementById("setaEsquerda").style.color = "black";
    document.getElementById("setaEsquerda").style.cursor = "url(/src/img/espada\ sem\ logoc.png), pointer";
    document.getElementById("pag2").style.color = "white";
    document.getElementById("pag2").style.cursor = "url(/src/img/GoldenswordLogo471.png), default";
    document.getElementById("setaDireita").style.color = "#3c3c3c";
    
    document.getElementById("setaDireita").style.cursor = "url(/src/img/GoldenswordLogo471.png), default";}
};

function obD1() {
    localStorage.img = obejetosComLetraD[0].img;
    localStorage.titulo = obejetosComLetraD[0].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obD2() {
    localStorage.img = obejetosComLetraD[1].img;
    localStorage.titulo = obejetosComLetraD[1].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obD3() {
    localStorage.img = obejetosComLetraD[2].img;
    localStorage.titulo = obejetosComLetraD[2].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};
function obD4() {
    localStorage.img = obejetosComLetraD[3].img;
    localStorage.titulo = obejetosComLetraD[3].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obD5() {
    localStorage.img = obejetosComLetraD[4].img;
    localStorage.titulo = obejetosComLetraD[4].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};

function obD6() {
    localStorage.img = obejetosComLetraD[5].img;
    localStorage.titulo = obejetosComLetraD[5].titulo;
    location.href = '/Objetos/Informações dos Objetos/InformaçõesDosObjetos.html';
};