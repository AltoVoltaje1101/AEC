const login= require("../modelos/loginModel");


const iniciarSesion= function (req, res){
    login.autenticar()
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};
const cerrarSesion= function (req, res){
    login.borrarToken()
    .then(r=>{
        res.json(r);
    }).catch(e=>{
        res.json("Archivo no guardado");
    });
};
module.exports.cerrarSesion=cerrarSesion
module.exports.iniciarSesion=iniciarSesion