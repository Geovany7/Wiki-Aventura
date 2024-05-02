function abrirEFecharPagina() {
    if (document.getElementById('idPersonagens').style.display == 'flex') {
        document.getElementById('idPagPag').style.backgroundColor = '#03538D'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    } else {
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#0E6CBA'
        document.getElementById('idPagin').style.display = 'flex'
        document.getElementById('idPersonagens').style.display = 'flex'
        document.getElementById('idRPG').style.display = 'flex'
        document.getElementById('idObjetos').style.display = 'flex'
        document.getElementById('idEpisodios').style.display = 'flex'
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#03538D'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#03538D'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharLinksOficiais() {
    if (document.getElementById('idSiteOficial').style.display == 'flex') {
        document.getElementById('idlinksOfi').style.backgroundColor = '#03538D'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
    } else {
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#0E6CBA'
        document.getElementById('idSiteOficial').style.display = 'flex'
        document.getElementById('idMercadoriaOficial').style.display = 'flex'
        document.getElementById('idReddit').style.display = 'flex'
        document.getElementById('idFrederatorStudios').style.display = 'flex'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#03538D'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#03538D'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharOutraslínguas() {
    if (document.getElementById('idEnglish').style.display == 'flex') {
        document.getElementById('idOutrasLi').style.backgroundColor = '#03538D'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    } else {
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#0E6CBA'
        document.getElementById('idEnglish').style.display = 'flex'
        document.getElementById('idPortugues').style.display = 'flex'
        
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#03538D'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#03538D'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    }
}

function fecharTudo(){
    //linguas
    document.getElementById('idOutrasLi').style.backgroundColor = '#03538D'
    document.getElementById('idEnglish').style.display = 'none'
    document.getElementById('idPortugues').style.display = 'none'
    //links Oficiais
    document.getElementById('idlinksOfi').style.backgroundColor = '#03538D'
    document.getElementById('idSiteOficial').style.display = 'none'
    document.getElementById('idMercadoriaOficial').style.display = 'none'
    document.getElementById('idReddit').style.display = 'none'
    document.getElementById('idFrederatorStudios').style.display = 'none'
    // pagina
    document.getElementById('idPagPag').style.backgroundColor = '#03538D'
    document.getElementById('idPagin').style.display = 'none'
    document.getElementById('idPersonagens').style.display = 'none'
    document.getElementById('idRPG').style.display = 'none'
    document.getElementById('idObjetos').style.display = 'none'
    document.getElementById('idEpisodios').style.display = 'none'
} 


var imported = document.createElement('script');
imported.src = '/Episódios/episodio.js';
document.head.appendChild(imported);
/*
const t1Ep1 = {
    tittlecard: '/src/img/episodios/T1E1.webp',
    numeroDoEp: 1,
    titulo : '"Pânico na Festa do Pijama"',
    sinopse: 'Princesa Jujuba ressuscita os mortos do Reino Doce e acaba causando um apocalipse zumbi, então Finn deve distrair seu povo enquanto a princesa cria um antídoto para a doença',
    dataDeLacamento: '5 de Abril, 2010'
};

document.getElementById('imageDoEp').src = localStorage.tittlecard;
document.getElementById("nomeDoEp").innerHTML = localStorage.titulo;
*/





let informacois =  `
<div class="imageComAsInformacoes" id="localDaInformacaoDoEp">
                        <img src="${localStorage.tittlecard}" id="imageDoEp" class="imageDoEp" alt="piloto">
                        <table class="tabelaComAsInformacoes">
                            <tr class="linhaDaTabelaCorEscura ">
                                <th colspan="2" class="TemporadaEEpisodios">${localStorage.temporadaEEp}</th>

                            </tr>
                            <tr class="linhaDaTabelaCorClara">
                                <th class="rotuloDaTabela">Exibição:</th>
                                <td>${localStorage.dataDeLacamento}</td>
                            </tr>
                            <tr class="linhaDaTabelaCorEscura">
                                <th class="rotuloDaTabela">Diretor:</th>
                                <td>${localStorage.diretor0}
                                    ${localStorage.diretor1}
                                    ${localStorage.diretor2}</td>
                            </tr>
                            <tr class="linhaDaTabelaCorClara">
                                <th class="rotuloDaTabela">História:</th>
                                <td>${localStorage.historia0}
                                    ${localStorage.historia1}
                                    ${localStorage.historia2}</td>
                            </tr>
                            <tr class="linhaDaTabelaCorEscura">
                                <th class="rotuloDaTabela">Storyboard:</th>
                                <td>${localStorage.storyboard0}
                                    ${localStorage.storyboard1}
                                    ${localStorage.storyboard2}</td>
                            </tr>
                        </table>
                    </div>
                    <h2 class="nomeDoEp" id="nomeDoEp">${localStorage.titulo}</h2> 
                    </div>`

document.getElementById('localDaInformacaoDoEp').innerHTML = informacois;


// document.getElementById("principalWiki").style.height = localStorage.tamDaPag;

document.getElementById('textoSinopse').innerHTML = localStorage.sinopse;

document.getElementById('textoEnredo').innerHTML = localStorage.enredo;

for (let i = 0; i < localStorage.tamCuriosidades; i++){
let sobreOEp = `<li class="listaDeCuriosidade">${localStorage.getItem(`curiosidades${i}`)}</li>    `

 document.getElementById('listaDeTodasAsCuriosidade').innerHTML += sobreOEp;
}