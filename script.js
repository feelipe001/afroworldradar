
function searchMovie() {
  const query = document.getElementById('searchInput').value;
  if (!query) {
    alert('Digite o nome de um filme!');
    return;
  }
  document.getElementById('results').innerHTML = '<p>Simulação: resultado para "' + query + '"</p>';
}
