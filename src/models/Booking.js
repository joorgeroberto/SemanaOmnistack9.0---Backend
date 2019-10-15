// Tabela de reservas.

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    // objeto que indica se ja foi aprovado ou não.
    approved: Boolean,
    // Qual usuario solicitou a reserva.
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // Qual local o usuario quer reservar.
    spot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);