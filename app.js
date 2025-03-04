var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;
    var resultCripto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    
    outInput.innerHTML = `
        <textarea readonly id="output-textarea">${resultCripto}</textarea>
        <button class="btn-copiar" onclick="copiar()">Copiar</button>
    `;
}

function descriptografar() {
    var texto = textInput.value;
    var resultDescripto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    
    outInput.innerHTML = `
        <textarea readonly id="output-textarea">${resultDescripto}</textarea>
        <button class="btn-copiar" onclick="copiar()">Copiar</button>
    `;
}

function copiar() {
    var textoCop = document.querySelector('#output-textarea');

    textoCop.select();
    
    document.execCommand('copy');

}