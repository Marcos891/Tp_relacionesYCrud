const {check} = require('express-validator');

module.exports = [
    check('title')
    .notEmpty().withMessage("Debe ingresar un titulo.").bail(),
    check('rating')
    .notEmpty().withMessage("Debe ingresar un rating.").bail(),
    check('awards')
    .notEmpty().withMessage("Debe ingresar un awards").bail(),
    check('release_date')
    .notEmpty().withMessage("Debe seleccionar una fecha").bail(),
    check('length')
    .notEmpty().withMessage("Debe ingresar su duracion").bail(),
]