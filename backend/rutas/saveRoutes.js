const { response } = require('express');
const express = require('express'); 
const router= express.Router();

//importar los controladores
const save= require("../controladores/saveController"); 

//rutas
router.post('/', save.saveDoc);
 

module.exports = router;