// Controllers têm a regra de negocio da aplicação.
// Na pratica, ele receberá uma requisição 'req' e irá retornar uma resposta 'res'

// Este controle será usado para informações da sessão como: autenticação, listagem de usuários logados, etc.
/*
    Possui os métodos: INDEX, SHOW, STORE, UPDATE, DESTROY
        Index - Retorna uma listagem
        Show - retorna uma única sessão
        Store - Cria uma sessão
        Update - Alterar uma sessão
        Destroy - Remover uma sessão
*/

// Chamando o model de usuário
const User = require('../models/User');

module.exports = {
    // Usaremos este store para criar a sessão do usuário
    async store(req, res) {
        // Acessando o email da requisição.
        //const email = req.body.email;

        // Desestruturando...
        const { email } = req.body;

        // Criando o usuário com o email da requisição.
        // Função assincrona.
        // É DIFERENTE DO USER IMPORTADO!
        //const user = await User.create({ email });

        // Verificando se o usuario ja existe
        let user = await User.findOne({ email });
        // Senao encontrar o usuario ele cadastra.
        // Se encontrar ele retorna o que já existe.
        if(!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};