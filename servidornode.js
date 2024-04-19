const express = require('express');
const sqlite3 = require('sqlite3').verbose(); // Importa o módulo SQLite3 e ativa mensagens de log detalhadas

const app = express();

// Configuração do banco de dados SQLite
const db = new sqlite3.Database(':memory:'); // Conecta ao banco de dados SQLite em memória; altere para um arquivo específico se desejar persistência

// Cria uma tabela de exemplo e insere alguns dados
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS sua_tabela (id INT, nome TEXT)");

    // Insere alguns dados de exemplo
    db.run("INSERT INTO sua_tabela (id, nome) VALUES (1, 'Exemplo 1')");
    db.run("INSERT INTO sua_tabela (id, nome) VALUES (2, 'Exemplo 2')");
});

// Rota para buscar dados do banco de dados com base no ID
app.get('/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM sua_tabela WHERE id = ?', [id], (err, row) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).send('Erro interno do servidor');
            return;
        }
        if (!row) {
            res.status(404).send('Registro não encontrado');
            return;
        }
        res.sendFile(__dirname + '/views/index.html');
    });
});

// Configuração do servidor web
app.use(express.static('public')); // Serve arquivos estáticos no diretório 'public'

// Inicia o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
