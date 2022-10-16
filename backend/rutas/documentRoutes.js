const { response } = require('express');
const express = require('express'); 
const router= express.Router();

//importar los controladores
const document= require("../controladores/documentController"); 

//rutas
router.post('/save', document.saveDoc);
router.get('/URL', document.getURL);
 

module.exports = router;