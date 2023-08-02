const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Digite seu Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Recebi o formulário, de ${req.body.nome}`);
});

app.get('/testes/:idUsuarios?/:outroParametro?', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log(`Server started on port 3000`);
});