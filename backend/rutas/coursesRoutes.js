const { response } = require('express');
const express = require('express'); 
const router= express.Router();

//importar los controladores del curso
const courses= require("../controladores/coursesController"); 

//rutas
router.get('/', courses.getCourses); //obtiene los cursos
router.get('/courseWorks', courses.getWorks); //obtiene los cursos
router.get('/courseWork/students', courses.getStudentsWorks); //obtiene los envios de las tareas de los alumnos
router.get('/student', courses.getStudent)
 

module.exports = router;