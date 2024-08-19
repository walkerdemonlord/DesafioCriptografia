// Selecionar os campos de entrada
let campo1 = document.querySelector(".campo1");
let campo2 = document.querySelector(".campo2");

// Função para criptografar o texto
function criptografar() {
    let texto = campo1.value;
    let divididoCampo1 = texto.split('');
    let criptografado = divididoCampo1.map(char => {
        let codigoChar = char.charCodeAt(0);
        let codigoCriptografado = codigoChar + 2; // Adicionar 2 ao código do caractere
        return String.fromCharCode(codigoCriptografado); // Converter de volta para caractere
    }).join(''); // Juntar os caracteres em uma string

    // Atualizar o campo2 com o texto criptografado
    campo2.value = criptografado;
    campo1.value = ""; // Limpar campo1
}

// Função para descriptografar o texto
function descriptografar() {
    let texto = campo2.value;
    let divididoCampo2 = texto.split('');
    let descriptografado = divididoCampo2.map(char => {
        let codigoChar = char.charCodeAt(0);
        let codigoDescriptografado = codigoChar - 2; // Subtrair 2 do código do caractere
        return String.fromCharCode(codigoDescriptografado); // Converter de volta para caractere
    }).join(''); // Juntar os caracteres em uma string

    // Atualizar o campo1 com o texto descriptografado
    campo1.value = descriptografado;
    campo2.value = ""; // Limpar campo2
}
