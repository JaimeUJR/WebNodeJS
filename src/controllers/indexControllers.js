class IndexControllers {
    loginPage(req, res) {
        res.render('login.ejs')
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
}

module.exports = new IndexControllers();