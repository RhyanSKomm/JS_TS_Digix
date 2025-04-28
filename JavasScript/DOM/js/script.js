document.getElementById('botao').addEventListener('click', function() {
    alert('Botão clicado!');
})

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

    openModalButton.onclick = () => modal.style.display = "block";
    closeModalButton.onclick = () => modal.style.display = "none";

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
