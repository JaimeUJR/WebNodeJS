class IndexControllers {
    loginPage(req, res) {
        res.render('login.ejs', { error: null})
    }
    indexScreen(req, res) {
        res.render('index.ejs')
    }
    resetScreen(req, res) {
        res.render('reset.ejs')
    }
    signInScreen(req, res ) {
        res.render('signIn.ejs')
    }
    orderScreen(req, res) {
        res.render('formOrder')
    }
    historyScreen(req, res) {
        res.render('historyCustomer')
    }
}

module.exports = new IndexControllers();