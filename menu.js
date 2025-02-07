function abrirMenu(){
    let imagemMenu = document.getElementById("imgMenu");
    let janelaNav = document.getElementById("caixaNav");
    let botao = document.getElementById("botao");
    let novaURL = "assets/xHamb.png";

    imagemMenu.src = novaURL
    janelaNav.onload

    janelaNav.style.right="0"
    janelaNav.style.transition=".5s all"

    botao.setAttribute('onclick', "fecharMenu()")
}

function fecharMenu(){
    let imagemMenu = document.getElementById("imgMenu");
    let janelaNav = document.getElementById("caixaNav");
    let botao = document.getElementById("botao");
    let novaURL2 = "assets/menuHamb.png";

    imagemMenu.src = novaURL2
    janelaNav.onload
    
    janelaNav.style.right="-50%"
    janelaNav.style.transition=".5s all"

    botao.setAttribute('onclick', "abrirMenu()")
}