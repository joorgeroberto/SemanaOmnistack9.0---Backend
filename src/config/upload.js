// Usaremos este arquivo para lidar com imagens ou arquivos da aplicação.

const multer = require('multer');
const path = require('path');

module.exports = {
    // Salvando no disco
    storage: multer.diskStorage({
        // Como cada SO vai para o caminho de forma diferente, usaremos resolve e virgulas para chegar na pasta uploads.
        destination: path.resolve(__dirname,'..','..','uploads'),
        // Definindo o nome do arquivo para que não seja gerado um codigo aleatorio.
        // cb é o callback. Uma função que é chamada assim que o nome do arquivo fica pronto.
        filename: (req, file, cb) => {
            // 1 - parametro: como nao tem tratamento de erros usaremos null no primeiro parametro.
            // 2 - parametro:
            //      Nome da extensão
            const ext = path.extname(file.originalname);
            //      fieldname é o nome do arquivo de imagem que o usuario vai passar
            const name = path.basename(file.originalname, ext);
            //      A data de hoje
            const date = Date.now();

            cb(null, `${name}-${date}${ext}`);
        },
    })
};