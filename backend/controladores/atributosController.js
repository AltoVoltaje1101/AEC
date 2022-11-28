const atributos= require("../modelos/atributosModel"); 


const getAtributos= function (req, res){
    res.json(atributos.getAll())
};
const getById= function (req, res){
    const {id}=req.body
    res.json(atributos.getById(id))
};
module.exports.getAtributos = getAtributos;
module.exports.getById= getById;
