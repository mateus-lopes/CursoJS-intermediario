const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Digite seu Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log(`Server started on port 3000`);
});