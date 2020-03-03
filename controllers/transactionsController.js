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
        return res.status(500).json({
            success: false,
            error: 'Erro Servidor'
        });
        
    }
}

// @desc    Add nova transação
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
    try {
        const { texto, quantia } = req.body;
    
        const transaction = await Transaction.create(req.body);
    
        return res.status(201).json({
            success: true,
            data: transaction
        })
        
    } catch (err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            res.status(400).json({
                sucess: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Erro Servidor'
            });
        }
    }
}

// @desc    Deletar transação
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction) {
            return res.status(404).json({
                success: false,
                error: 'Nenhuma transação encontrada'
            })
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Erro Servidor'
        }); 
    }
}