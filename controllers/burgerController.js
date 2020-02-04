const db = require('../config')

module.exports = {
    getBurgers(cb) {
        let result = []
        db.query('SELECT * FROM burgers', (e, burgers) => {
            if (e) {
                console.log(e)
            }
            cb(burgers)
        })
    },
    addBurger(cb) {
        db.query('INSERT INTO burgers (name, eaten) VALUES (`${name}`,`${eaten}`)', e => {
            if (e){
                console.log(e)
            }
            cb()
        })
        
    },
    eatBurger(cb) {
        cb()
    },
    removeBurger(cb) {
        cb()
    }
}