const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    texto: {
        type:String,
        trim: true,
        required: [true, 'Favor adicionar uma descrição']
    },
    quantia: {
        type: Number,
        required: [true, 'Favor adicionar um valor positivo ou negativo']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);