
function resgDado() {
        var dado = document.getElementById("iddado").value;
        document.getElementById("result").innerHTML = "Valor apresentado: " + dado;
}

function quadrado() {
    var quadrado = document.getElementById("iddado").value **2;
    document.getElementById("quadradore").innerHTML = "Valor ao quadrado: " + quadrado;
};

function cubo(){
    var cubo = document.getElementById("iddado").value ** 3;
    document.getElementById("cubore").innerHTML = "Valor ao cubo: " + cubo;
};

const buttonMode = document.getElementById('buttonMode');
const body = document.body;

buttonMode.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    // Salvar preferência do usuário no armazenamento local (localStorage)
    const darkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkMode);
});

// Verificar se o usuário já selecionou o modo escuro anteriormente
const darkMode = localStorage.getItem('darkMode') === 'true';
if (darkMode) {
    body.classList.add('dark-mode');
}