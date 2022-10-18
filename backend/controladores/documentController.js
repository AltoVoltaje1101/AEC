//importar el arreglo de arrendadores
const { response } = require("express");
const drive= require("../modelos/driveModel"); 

//guardar un documento
const saveDoc= function (req, res){
    drive.uploadFile()
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

module.exports.saveDoc = saveDoc;
module.exports.getURL = getURL;