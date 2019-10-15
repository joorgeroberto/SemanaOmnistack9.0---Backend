// Tabela do banco para os locais (Spots)

const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    // Nome da imagem
    thumbnail: String,
    company: String,
    price: Number,
    // Array com as tecnologias usadas
    techs: [String],
    // O usuario que gravou a informação
    user: {
        type: mongoose.Schema.Types.ObjectID,
        //Nome da Schema que está sendo referido.
        ref: 'User'
    }
}, { // Configurações para o mongoose.
    toJSON: { // Ativando o virtual que definimos abaixo.
        virtuals: true
    }
});

// Criaremos um campo que vai ser computado dentro do JavaScript. Não existe no Banco mas vai ser computado no JavaScript.
// Dentro do MongoDB isto é chamado de 'virtual'.
SpotSchema.virtual('thumbnail_url').get(function() {
   return(`http://localhost:3333/files/${this.thumbnail}`)
});

module.exports = mongoose.model('Spot', SpotSchema);