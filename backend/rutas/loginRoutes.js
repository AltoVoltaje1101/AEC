const express = require('express'); 
const router= express.Router();

const login= require("../controladores/loginController"); 

router.post('/', login.iniciarSesion); //guardar un archivo en drive
router.delete('/', login.cerrarSesion);
module.exports = router;