//importar el arreglo de arrendadores
const { response } = require("express");
const courses= require("../modelos/classroomModel"); 

//obtiene los cursos de classroom
const getCourses= function (req, res){
    courses.getCourses()
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};
const getCourse= function (req, res){
    const {courseId}=req.body
    courses.getCourse(courseId)
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};
const getWorks= function (req, res){
    const {courseId}=req.body
    console.log(req.body)
    courses.getWorks(courseId)
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Datos erroneos");
    });
};
const getWork= function (req, res){
    const {courseId}=req.body
    const {courseWorkId}=req.body
    courses.getWork(courseId,courseWorkId)
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};
const getStudentsWorks= function (req, res){
    const {courseId}=req.body
    const {courseWorkId} = req.body
    courses.getStudentsWorks(courseId,courseWorkId)
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};
const getStudent= function (req, res){
    const {userId}=req.body
    courses.getStudent(userId)
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};
module.exports.getStudent=getStudent;
module.exports.getStudentsWorks=getStudentsWorks;
module.exports.getCourses = getCourses;
module.exports.getWorks= getWorks;
module.exports.getWork= getWork;
module.exports.getCourse=getCourse