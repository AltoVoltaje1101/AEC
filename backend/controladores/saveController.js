//importar el arreglo de arrendadores
const { response } = require("express");
const save= require("../modelos/saveModel"); 

const saveDoc= function (req, res){
    save.saveDocument()
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};


module.exports.saveDoc = saveDoc;