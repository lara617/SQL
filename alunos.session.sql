-- Criação da Tabela Alunos
CREATE TABLE IF NOT EXISTS Alunos (
    ID INTEGER PRIMARY KEY,
    Nome TEXT,
    Idade INTEGER,
    Classe INTEGER,
    Nota REAL
);

-- Inserção de Dados na Tabela Alunos
INSERT INTO Alunos (Nome, Idade, Classe, Nota) VALUES
('João', 16, 10, 8.5),
('Maria', 14, 9, 7.2),
('Pedro', 17, 10, 9.0),
('Ana', 15, 10, 8.8),
('Carlos', 13, 8, 6.5);

-- Selecionar todos os alunos da tabela Alunos
SELECT * FROM Alunos;

-- Selecionar o nome e a idade de todos os alunos com idade superior a 15 anos
SELECT Nome, Idade FROM Alunos WHERE Idade > 15;

-- Selecionar o nome, a classe e a nota de todos os alunos que estão na classe 10
SELECT Nome, Classe, Nota FROM Alunos WHERE Classe = 10;

-- Calcular a média das notas de todos os alunos
SELECT AVG(Nota) AS Media FROM Alunos;

-- Selecionar o nome e a nota do aluno com a nota mais alta
SELECT Nome, Nota FROM Alunos ORDER BY Nota DESC LIMIT 1;

-- Atualizar a nota do aluno com o ID igual a 3 para 90
UPDATE Alunos SET Nota = 90 WHERE ID = 3;

-- Excluir todos os alunos com idade inferior a 12 anos
DELETE FROM Alunos WHERE Idade < 12;
