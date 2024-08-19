let campo1 = document.querySelector(".campo1").value;
let campo2 = document.querySelector(".campo2").value;
const divididoCampo1 = campo1.split('');
const divididoCampo2 = campo2.split('');

function criptografar (a) {
    for (let i = 0; i < divididoCampo1.length; ++i) {
        divididoCampo1 = divididoCampo1.charCode(i);
        divididoCampo1 = divididoCampo1.map(i => i + 2);
        divididoCampo1 = divididoCampo1.String.fromCharCode(i);
        
    }
}
