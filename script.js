function searchMovie() {
    const query = document.getElementById('searchInput').value;
    if (!query) {
        alert('Digite o nome de um filme!');
        return;
    }

    document.getElementById('results').innerHTML = "<p>Simulação: resultado para '" + query + "'</p>";
}

// Função do botão ASSISTIR com Popunder
function watch(title) {
    // Abre o popunder (anúncio)
    window.open('https://pl26763948.profitableratecpm.com/40/cf/b5/40cfb5facfa5de3009ac9eb0de7713c4', '_blank');

    // Salva o nome do filme e redireciona
    localStorage.setItem("movieTitle", title);
    window.location.href = "assistir.html";
}
