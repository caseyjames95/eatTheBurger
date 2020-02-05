const { burgers: { getBurgers, addBurgers, eatBurgers, removeBurgers } } = require('./controllers')

module.exports = app => {
    // Get all pizza
    app.get('/burgers', (req, res) => {
        getBurgers(burgers => {
            res.json(burgers)
        })
    })
    // Get 1 Burger
    app.post('/burgers', (req, res) => {
        addBurgers(res.body.name, req.body.eaten, ()=> {
            res.sendStatus(200)
        })
    })
    // Pur one Burger
    app.put('/burgers/:id', (req, res) => {
        eatBurgers(parseInt(req.params.id), () => {
            res.sendStatus(200)
        })
    })
    // Delete one Burger
    app.delete('/burgers/:id', (req, res) => {
        removeBurgers(parseInt(req.params.id), () => {
            res.sendStatus(200)
        })
    })
}