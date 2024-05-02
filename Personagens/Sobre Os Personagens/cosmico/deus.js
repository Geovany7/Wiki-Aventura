function abrirEFecharPagina() {
    if (document.getElementById('idPersonagens').style.display == 'flex') {
        document.getElementById('idPagPag').style.backgroundColor = '#181818'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    } else {
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#181818'
        document.getElementById('idPagin').style.display = 'flex'
        document.getElementById('idPersonagens').style.display = 'flex'
        document.getElementById('idRPG').style.display = 'flex'
        document.getElementById('idObjetos').style.display = 'flex'
        document.getElementById('idEpisodios').style.display = 'flex'
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#181818'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#181818'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharLinksOficiais() {
    if (document.getElementById('idSiteOficial').style.display == 'flex') {
        document.getElementById('idlinksOfi').style.backgroundColor = '#181818'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
    } else {
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#181818'
        document.getElementById('idSiteOficial').style.display = 'flex'
        document.getElementById('idMercadoriaOficial').style.display = 'flex'
        document.getElementById('idReddit').style.display = 'flex'
        document.getElementById('idFrederatorStudios').style.display = 'flex'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#181818'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#181818'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    }
}

function abrirEFecharOutraslínguas() {
    if (document.getElementById('idEnglish').style.display == 'flex') {
        document.getElementById('idOutrasLi').style.backgroundColor = '#181818'
        document.getElementById('idEnglish').style.display = 'none'
        document.getElementById('idPortugues').style.display = 'none'
    } else {
        //linguas
        document.getElementById('idOutrasLi').style.backgroundColor = '#181818'
        document.getElementById('idEnglish').style.display = 'flex'
        document.getElementById('idPortugues').style.display = 'flex'
        
        //links Oficiais
        document.getElementById('idlinksOfi').style.backgroundColor = '#181818'
        document.getElementById('idSiteOficial').style.display = 'none'
        document.getElementById('idMercadoriaOficial').style.display = 'none'
        document.getElementById('idReddit').style.display = 'none'
        document.getElementById('idFrederatorStudios').style.display = 'none'
        // pagina
        document.getElementById('idPagPag').style.backgroundColor = '#181818'
        document.getElementById('idPagin').style.display = 'none'
        document.getElementById('idPersonagens').style.display = 'none'
        document.getElementById('idRPG').style.display = 'none'
        document.getElementById('idObjetos').style.display = 'none'
        document.getElementById('idEpisodios').style.display = 'none'
    }
}

function fecharTudo(){
    //linguas
    document.getElementById('idOutrasLi').style.backgroundColor = '#181818'
    document.getElementById('idEnglish').style.display = 'none'
    document.getElementById('idPortugues').style.display = 'none'
    //links Oficiais
    document.getElementById('idlinksOfi').style.backgroundColor = '#181818'
    document.getElementById('idSiteOficial').style.display = 'none'
    document.getElementById('idMercadoriaOficial').style.display = 'none'
    document.getElementById('idReddit').style.display = 'none'
    document.getElementById('idFrederatorStudios').style.display = 'none'
    // pagina
    document.getElementById('idPagPag').style.backgroundColor = '#181818'
    document.getElementById('idPagin').style.display = 'none'
    document.getElementById('idPersonagens').style.display = 'none'
    document.getElementById('idRPG').style.display = 'none'
    document.getElementById('idObjetos').style.display = 'none'
    document.getElementById('idEpisodios').style.display = 'none'
} 