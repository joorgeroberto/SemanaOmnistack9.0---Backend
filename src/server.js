// Arquivo que inicializa o servidor

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
//Usaremos este pacote para fazer a atualização em tempo real sem precisar recarregar a página/aplicativo.
const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
// Pegando o servidor http do express.
const server = http.Server(app);
// Agora o server tambem consegue ouvir o protocolo WebSocket
const io = socketio(server);

// Com esta linha, faremos requisições para o servidor MongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-9qxgt.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Usando o 'yarn add cors' para evitar o erro de cors que ocorre quando aplicações indesejadas acessam o servidor.
// Com esta configuração o erro é desativado e qquer aplicação pode acessar o backend.
app.use(cors());
/*  Se quisermos que apenas aplicações que estejam em localhost:3333 acessem o servidor:
    app.use(cors({ origin: 'http://localhost:3333' }));
*/

// "Avisando" ao express que usaremos JSON para criar dados.
app.use(express.json());

// Quando o usuario acessar a rota /files no frontend retornaremos a imagem.
// static() retorna arquivos estáticos como pdf, imagens, etc. Aqui, usaremos para retornar a imagem.
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));

// SEMPRE COLOCAR DEPOIS DO EXPREX JSON!!
// "Avisando" que usaremos o arquivo routes.
app.use(routes);

// Executa a aplicação que será acessada pela porta '3333'.
//app.listen(3333);

//Trocaremos "app." por "server." para que a aplicação seja capaz de ouvir http e WebSocket.
server.listen(3333);