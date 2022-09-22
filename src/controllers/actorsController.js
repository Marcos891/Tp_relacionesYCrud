const db = require('../database/models');
const sequelize = db.sequelize;


const actorsController = {
    'list': (req, res) => {
        db.Actors.findAll()
            .then(actors => {
                res.render('actorsList.ejs', {actors})
            })
    }}