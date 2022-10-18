const { response } = require('express');
const express = require('express'); 
const router= express.Router();

//importar los controladores del curso
const courses= require("../controladores/coursesController"); 

//rutas
router.get('/', courses.getCourses); //obtiene los cursos
 

module.exports = router;