// @desc    Pegar todas as transações
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransaction = (req, res, next) => {
    res.send('Get transações');
}

// @desc    Add nova transação
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = (req, res, next) => {
    res.send('POST transação');
}

// @desc    Deletar transação
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transação');
}