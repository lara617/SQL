// Função para carregar os dados dos alunos via AJAX
function carregarDados() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse dos dados JSON recebidos
            var alunos = JSON.parse(this.responseText);
            var tableBody = document.getElementById("alunosTableBody");

            // Limpar a tabela antes de adicionar os novos dados
            tableBody.innerHTML = "";

            // Adicionar cada aluno como uma linha na tabela
            alunos.forEach(function(aluno) {
                var row = tableBody.insertRow();
                row.insertCell().innerText = aluno.ID;
                row.insertCell().innerText = aluno.Nome;
                row.insertCell().innerText = aluno.Idade;
                row.insertCell().innerText = aluno.Classe;
                row.insertCell().innerText = aluno.Nota;

                // Adicionar botões para editar e excluir o aluno
                var cellAcao = row.insertCell();
                var btnEditar = document.createElement("button");
                btnEditar.textContent = "Editar";
                btnEditar.onclick = function() {
                    // Função de edição do aluno
                    editarAluno(aluno.ID);
                };
                cellAcao.appendChild(btnEditar);

                var btnExcluir = document.createElement("button");
                btnExcluir.textContent = "Excluir";
                btnExcluir.onclick = function() {
                    // Função de exclusão do aluno
                    excluirAluno(aluno.ID);
                };
                cellAcao.appendChild(btnExcluir);
            });
        }
    };
    // Fazer a requisição para obter os dados dos alunos
    xhttp.open("GET", "alunos.json", true);
    xhttp.send();
}

// Função para adicionar um novo aluno
document.getElementById("addForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var classe = document.getElementById("classe").value;
    var nota = document.getElementById("nota").value;

    // Enviar os dados para o servidor (pode ser feito via AJAX)
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    // e atualizar o banco de dados.

    // Depois de adicionar o aluno, recarregar os dados da tabela
    carregarDados();
    // Limpar o formulário após a adição
    this.reset();
});

// Função para editar um aluno
function editarAluno(id) {
    // Aqui você pode adicionar a lógica para editar o aluno com o ID fornecido
    alert("Editar aluno com ID: " + id);
}

// Função para excluir um aluno
function excluirAluno(id) {
    // Aqui você pode adicionar a lógica para excluir o aluno com o ID fornecido
    alert("Excluir aluno com ID: " + id);
}

// Chamar a função para carregar os dados quando a página for carregada
window.onload = carregarDados;



function carregarDados() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var alunos = JSON.parse(this.responseText);
            alunosFiltrados = alunos; // Armazenar todos os alunos para facilitar a filtragem posterior
            renderizarAlunos(alunos);
        }
    };
    xhttp.open("GET", "alunos.json", true);
    xhttp.send();
}

function renderizarAlunos(alunos) {
    var tableBody = document.getElementById("alunosTableBody");
    tableBody.innerHTML = "";

    alunos.forEach(function(aluno) {
        var row = tableBody.insertRow();
        row.insertCell().innerText = aluno.ID;
        row.insertCell().innerText = aluno.Nome;
        row.insertCell().innerText = aluno.Idade;
        row.insertCell().innerText = aluno.Classe;
        row.insertCell().innerText = aluno.Nota;

        var cellAcao = row.insertCell();
        var btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.onclick = function() {
            editarAluno(aluno.ID);
        };
        cellAcao.appendChild(btnEditar);

        var btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = function() {
            excluirAluno(aluno.ID);
        };
        cellAcao.appendChild(btnExcluir);
    });
}

// Função para filtrar os alunos com base no critério de pesquisa
function filtrarAlunos() {
    var filtro = document.getElementById("filtro").value.toLowerCase();

    var alunosFiltrados = alunos.filter(function(aluno) {
        return aluno.Nome.toLowerCase().includes(filtro) ||
               aluno.Idade.toString().includes(filtro) ||
               aluno.Classe.toString().includes(filtro) ||
               aluno.Nota.toString().includes(filtro);
    });

    renderizarAlunos(alunosFiltrados);
}
