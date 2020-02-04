const { burgers: { getBurgers } } = require('./controllers')

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
        
    })
    // Delete one Burger
    app.delete('/burgers/:id', (req, res) => {

    })
}