function saudarTratado(): void {
    const input = document.getElementById("nome")

    if (input && input instanceof HTMLInputElement) {

        const nome = input.value.trim();

        if(nome === "") {
            alert("Por favor, digite um nome válido.");
        }
        else {
            console.error("Nome inválido.");
        }
    }
}