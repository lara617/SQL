// Função para carregar alunos da API
function carregarAlunos() {
    fetch('/api/alunos')
    .then(response => response.json())
    .then(alunos => {
        // Manipular os dados recebidos, como adicionar à lista de alunos na página HTML
        const listaAlunos = document.getElementById('listaAlunos');
        listaAlunos.innerHTML = '';
        alunos.forEach(aluno => {
            const itemLista = document.createElement('li');
            itemLista.textContent = `${aluno.Nome} - Idade: ${aluno.Idade} - Nota: ${aluno.Nota}`;
            listaAlunos.appendChild(itemLista);
        });
    })
    .catch(error => console.error('Erro ao carregar alunos:', error));
}

// Chamar a função para carregar alunos quando a página carregar
window.onload = carregarAlunos;
