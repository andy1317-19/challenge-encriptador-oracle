
function cifrar() {
    var texto = document.getElementById("textarea1").value.toLowerCase();
    var cifrado = texto.replace  (/e/igm, "enter");
    var cifrado = cifrado.replace(/i/igm, "ines");
    var cifrado = cifrado.replace(/a/igm, "ai");
    var cifrado = cifrado.replace(/u/igm, "ufat");
    var cifrado = cifrado.replace(/o/igm,"ober");

    document.getElementById("bot").style.display = "none";
    document.getElementById("nomessage").style.display = "none";
    document.getElementById("textright").innerHTML = cifrado;
    document.getElementById("copying").display = "inherit";

}
function desencriptar() {
    var texto = document.getElementById("textarea1").value.toLowerCase();
    var cifrado = texto.replace  (/enter/igm, "e");
    var cifrado = cifrado.replace(/ines/igm, "i");
    var cifrado = cifrado.replace(/ai/igm, "a");
    var cifrado = cifrado.replace(/ufat/igm, "u");
    var cifrado = cifrado.replace(/ober/igm, "o");

    document.getElementById("bot").style.display = "none";
    document.getElementById("nomessage").style.display = "none";
    document.getElementById("textright").innerHTML = cifrado;
    document.getElementById("copying").display = "inherit";

}

function copiar(){
    var content = document.querySelector("#textright");
    content.select();
    document.execCommand("copy")
    alert("!El texto se ha copiado en tu portapapeles!")
}



