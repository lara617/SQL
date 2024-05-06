// Importar o SQLite
const sqlite3 = require('sqlite3').verbose();

// Abrir a conexão com o banco de dados
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conexão bem-sucedida ao banco de dados SQLite.');
});

// Executar os comandos SQL para criar tabela e inserir dados
db.serialize(() => {
    // Comandos SQL para criar tabela e inserir dados aqui
});

// Fechar a conexão com o banco de dados ao finalizar
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Conexão com o banco de dados SQLite encerrada.');
    });
});
