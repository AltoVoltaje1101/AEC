const { response } = require('express');
const express = require('express'); 
const router= express.Router();

//importar los controladores del curso
const courses= require("../controladores/coursesController"); 

//rutas
router.post('/', courses.getCourses); //obtiene los cursos
router.post('/courseWorks', courses.getWorks); //obtiene los cursos
router.post('/courseWork/students', courses.getStudentsWorks); //obtiene los envios de las tareas de los alumnos
router.post('/student', courses.getStudent)
router.post('/courseWork', courses.getWork)
router.post('/course', courses.getCourse)
router.post('/teacher', courses.getTeacher)
 

module.exports = router;