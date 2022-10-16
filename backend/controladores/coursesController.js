//importar el arreglo de arrendadores
const { response } = require("express");
const courses= require("../modelos/classroomModel"); 

const getCourses= function (req, res){
    courses.getCourses()
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};


module.exports.getCourses = getCourses;