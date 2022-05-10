const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i=0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

function btndesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(StringParadesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParadesencriptar = StringParadesencriptar.toLowerCase();
    for (let i=0; i< matrizCodigo.length; i++){
        if(StringParadesencriptar.includes(matrizCodigo[i][0])){
            StringParadesencriptar = StringParadesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParadesencriptar;
}


function btncopiar(){
    copiarTexto();
}

function copiarTexto () {
    var texto = document.querySelector(".input-text-area").value;
    navigator.clipboard.writeText(texto);
}

function btnpegar(){
        pegarTexto();
}

function pegarTexto(){
   navigator.clipboard.readText()
        .then((textoPega) => {
            document.querySelector(".input-text").value = textoPega;

        })
    }    

