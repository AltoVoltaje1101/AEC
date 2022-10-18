const { response } = require('express');
const express = require('express'); 
const router= express.Router();

//importar los controladores de los formularios
const document= require("../controladores/documentController"); 

//rutas
router.post('/save', document.saveDoc); //guardar un archivo en drive
router.get('/URL', document.getURL); //obtener su URL
 

module.exports = router;