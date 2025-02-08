function lerTexto1(){
    let textoHomem = document.getElementById("textHomem");
    let esconder1 = document.getElementById("esconderTexto1");

    textoHomem.textContent = "Musculação e avaliações para homens."

    esconder1.setAttribute('onclick', "fechar1()")
}

function lerTexto2(){
    let textoMusc = document.getElementById("textMusc");
    let esconder2 = document.getElementById("esconderTexto2");

    textoMusc.textContent = "Musculação para todos a partir de 16 anos."

    esconder2.setAttribute('onclick', "fechar2()")
}

function lerTexto3(){
    let textoMulher = document.getElementById("textMul");
    let esconder3 = document.getElementById("esconderTexto3");

    textoMulher.textContent = "Musculação e avaliações para mulheres."

    esconder3.setAttribute('onclick', "fechar3()")
}
/** Fim do onclick de expansão de informações */


function fechar1(){
    let esconderHomem1 = document.getElementById("textHomem");
    let botaoEsconder1 = document.getElementById("esconderTexto1");

    esconderHomem1.textContent = " "
    botaoEsconder1.setAttribute('onclick', "lerTexto1()")
}

function fechar2(){
    let esconderHomem2 = document.getElementById("textMusc");
    let botaoEsconder2 = document.getElementById("esconderTexto2");

    esconderHomem2.textContent = " "
    botaoEsconder2.setAttribute('onclick', "lerTexto2()")
}

function fechar3(){
    let esconderHomem3 = document.getElementById("textMul");
    let botaoEsconder3 = document.getElementById("esconderTexto3");

    esconderHomem3.textContent = " "
    botaoEsconder3.setAttribute('onclick', "lerTexto3()")
}