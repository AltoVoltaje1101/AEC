const express = require('express'); 
const router= express.Router();

//importar los controladores del curso
const atributos= require("../controladores/atributosController"); 

router.get('/', atributos.getAtributos); //obtiene los atributos
router.post('/id', atributos.getById); //obtiene el atributo con id

module.exports = router;