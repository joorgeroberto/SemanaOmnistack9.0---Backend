// Representa a tabela de usuarios no banco de dados

const mongoose = require('mongoose');

// Estrutura da tabela usuario.
const UserSchema = new mongoose.Schema({
    email: String,
});

// Criando o model com o nome sendo 'User' e o valor sendo UserSchema definido anteriormente.
module.exports = mongoose.model('User', UserSchema);
