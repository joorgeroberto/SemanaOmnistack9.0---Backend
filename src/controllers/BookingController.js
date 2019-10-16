// Criando uma nova reserva.

const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        // Id do local
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        // Obter informações do usuario e do local depois de criar a reserva
        // Populando as tabelas de usuario e de local para q a reserva fique atrelada a eles.
        await booking.populate('spot').populate('user').execPopulate();

        // Verificando se o usuário dono do spot está conectado.
        const ownerSocket = req.connectedUsers[booking.spot.user];

        // Se o usuário estiver conectado, envia uma mensagem booking request.
        if (ownerSocket) {
            req.io.to(ownerSocket).emit('booking_request', booking);
        }

        return res.json( booking );
    }
};