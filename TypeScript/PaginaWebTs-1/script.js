function saudarTratado() {
    var input = document.getElementById("nome");
    
    if (input && input instanceof HTMLInputElement) {
        var nome = input.value.trim();
        if (nome === "") {
            alert("Por favor, digite um nome válido.");
        }
        else {
            alert("Olá " + nome + ", tudo bem?");
        }
    } else {
        alert("Elemento não encontrado com o id 'nome'.")
    }
} 
