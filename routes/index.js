module.exports = app => {
    require('./burgerRoutes.js')(app)
    require('./viewroutes.js')(app)
}