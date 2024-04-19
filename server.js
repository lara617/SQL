const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos (como a página HTML)
app.use(express.static(path.join(__dirname)));

// Endpoint para fornecer os dados dos alunos via API
app.get('/api/alunos', (req, res) => {
    // Aqui você pode adicionar a lógica para carregar os dados dos alunos do banco de dados
    // e enviar como resposta
    const alunos = [
        { ID: 1, Nome: 'João', Idade: 20, Classe: 'A', Nota: 8 },
        { ID: 2, Nome: 'Maria', Idade: 22, Classe: 'B', Nota: 7 },
        { ID: 3, Nome: 'Pedro', Idade: 21, Classe: 'A', Nota: 9 }
    ];
    res.json(alunos);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
