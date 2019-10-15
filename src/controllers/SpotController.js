// Controllers têm a regra de negocio da aplicação.
// Na pratica, ele receberá uma requisição 'req' e irá retornar uma resposta 'res'

const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    // Lembrando que index retorna todos os recursos...
    async index(req, res) {
        // Usando a filtragem por tecnologias usando req.query
        const { tech } = req.query;

        // Listando os spots que possuem a tech indicada acima.
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res) {
        // Verificando se os arquivos estão sendo criados
        // console.log(req.body);
        // console.log(req.file);

        const { filename } = req.file;
        const { company, techs, price } = req.body;
        // Headers enviam contextos sobre uma requisição.
        // Usaremos ele para enviar o id do usuario logado.
        const { user_id } = req.headers;

        // Validando. Verificando se o User importado realmente existe
        const user = await User.findById(user_id);
        // Se não existir retorna este erro!
        if(!user) {
            return res.status(400).json({ error: 'User does not exist!' })
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            // transformando o techs em um array separado por virgula.
            // trim retira o espaço antes e depois de cada tecnologia.
            techs: techs.split(',').map(tech => tech.trim()),
            price,
        });

        return res.json({ spot });
    }
};