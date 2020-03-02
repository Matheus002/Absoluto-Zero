const Transaction = require('../models/Transaction');


// @desc    Pegar todas as transações
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransaction = async (req, res, next) => {
    // res.send('Get transações');
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            quantidade: transactions.length,
            data: transactions 
        })
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Erro Servidor'
        })
        
    }
}

// @desc    Add nova transação
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
    res.send('POST transação');
}

// @desc    Deletar transação
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transação');
}