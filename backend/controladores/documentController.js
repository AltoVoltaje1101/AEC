//importar el arreglo de arrendadores
const { response } = require("express");
const drive= require("../modelos/driveModel"); 
const document= require("../modelos/documentModel");

//guardar un documento
const saveDoc= function (req, res){
    drive.uploadFile("test.pdf","application/pdf")
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};
//obtiene el URL de un documento
const getURL= function (req, res){
    const {id}=req.body
    drive.generateURL(id)
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};
const createEvidence= function (req, res){
    const {courseId}=req.body
    const {courseWorkId}= req.body
    document.createEvidence(courseId,courseWorkId)
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};

module.exports.createEvidence = createEvidence;
module.exports.saveDoc = saveDoc;
module.exports.getURL = getURL;