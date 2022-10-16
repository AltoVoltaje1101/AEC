const { response } = require('express');
const express = require('express'); 
const router= express.Router();

//importar los controladores
const courses= require("../controladores/coursesController"); 

//rutas
router.get('/', courses.getCourses);
 

module.exports = router;