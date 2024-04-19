// Função para adicionar um novo aluno
function adicionarAluno() {
    var nome = document.getElementById("nomeInput").value;
    var idade = document.getElementById("idadeInput").value;
    var classe = document.getElementById("classeInput").value;
    var nota = document.getElementById("notaInput").value;

    var sqlQuery = "INSERT INTO Alunos (Nome, Idade, Classe, Nota) VALUES (?, ?, ?, ?)";
    var params = [nome, idade, classe, nota];

    db.run(sqlQuery, params, function() {
        alert("Aluno adicionado com sucesso!");

        // Após a inserção bem-sucedida, atualize a lista de alunos na página
        atualizarListaAlunos();
    }, function(error) {
        alert("Erro ao adicionar aluno: " + error);
    });
}

// Função para atualizar a lista de alunos na página
function atualizarListaAlunos() {
    var listaAlunos = document.getElementById("listaAlunos");
    listaAlunos.innerHTML = ""; // Limpa a lista atual

    // Consulta SQL para obter todos os alunos do banco de dados
    var sqlQuery = "SELECT * FROM Alunos";
    var result = db.exec(sqlQuery);

    // Se houver resultados, atualize a lista de alunos na página
    if (result && result[0] && result[0].values) {
        result[0].values.forEach(function(aluno) {
            var alunoItem = document.createElement("li");
            alunoItem.textContent = "Nome: " + aluno[1] + ", Idade: " + aluno[2] + ", Classe: " + aluno[3] + ", Nota: " + aluno[4];
            listaAlunos.appendChild(alunoItem);
        });
    }
}

