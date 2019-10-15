//Arquivo server.js original que deixaremos como exemplo.


/*

// Arquivo que inicializa o servidor

// Utilizaremos o express, um "mini-framework" que funciona dentro do node para ajudar a fazer algumas coisas:
// - Como criar rotas, retornar coisas, usar app.listen, get, delete, post, put, etc.
// - Para testar essa api rest usaremos o Insomnia (que é tipo o PostMan)
const express = require('express');

const app = express();

// Rota do usuário, função com dois parametros(requisição - com este req pegamos os parametro que o usuario mandar por ele, com o res enviamos uma resposta para a requisição )
/!*app.get('/users', (req, res) => {
    // Como vimos anteriormente, res é a resposta. Com esta linha de código enviamos uma resposta em texto para o usuario.
    //return res.send('Hello World');

    // Como vamos criar uma API Rest, não podemos retornar um texto e sim uma estrutura de dados JSON.
    // Vamos retornar um objeto com a mensagem: "Hello World"
    return res.json({ message: "Hello World" });
});*!/

// Utiliando GET com parametros especificos.
/!*app.get('/users', (req, res) => {

    // Com isso, retornaremos apenas as pessoas com idade igual a recebida.
    // req.query = Acessar query params (para filtros).
    return res.json({ idade: req.query.idade });
});*!/

// Utilizando um POST. Que serve para colocar dados no servidor.
/!*app.post('/users', (req, res) => {
    return res.json({ message: "Hello World"  });
});*!/

// Editando dados do servidor. Passando o id do usuario.
app.put('/users/:id', (req, res) => {
    // req.params = Acessar route params (para edição e delete)
    return res.json({ id: req.params.id });
});

// "Avisando" ao express que usaremos JSON para criar dados.
app.use(express.json());

// Utilizando POST para criar um usuario. Enviando dados para o servidor
app.post('/users', (req, res) => {
    // req.body = Acessar corpo da requisição (para criação e edição de registros)
    return res.json(req.body);
});

// Executa a aplicação que será acessada pela porta '3333'.
app.listen(3333);


*/
