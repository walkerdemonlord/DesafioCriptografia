// Selecionar os campos de entrada
let campo1 = document.querySelector(".campo1");
let campo2 = document.querySelector(".campo2");
const chaveCripto = 5;

// Função para criptografar o texto
function criptografar() {
    let texto = campo1.value;
    let divididoCampo1 = texto.split('');
    let criptografado = divididoCampo1.map(char => {
        let codigoChar = char.charCodeAt(0);
        let codigoCriptografado = codigoChar + chaveCripto;
        return String.fromCharCode(codigoCriptografado);
    }).join('');

    campo2.value = criptografado;
    campo1.value = "";

}

// Função para descriptografar o texto
function descriptografar() {
    let texto = campo2.value;
    let divididoCampo2 = texto.split('');
    let descriptografado = divididoCampo2.map(char => {
        let codigoChar = char.charCodeAt(0);
        let codigoDescriptografado = codigoChar - chaveCripto;
        return String.fromCharCode(codigoDescriptografado);
    }).join('');

    campo1.value = descriptografado;
    campo2.value = "";
    
}

function copiar() {
    let copia = campo2.value;
    if (copia) {
        navigator.clipboard.writeText(copia)
            .then(() => {
                alert("Copiado para a área de transferência!");
            })
            .catch(err => {
                console.error("Erro ao copiar texto: ", err);
            });
    } else {
        alert("Nada para copiar!");
    }
    campo2.value = "";
}
