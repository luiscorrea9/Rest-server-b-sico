const Role = require('../models/role')
const Usuario = require('../models/usuario')



const rolValido =  async(rol='')=>{
    const existeRol = await Role.findOne({rol})
    if(!existeRol){
      throw new Error(`El rol ${rol} no está registrado en la Base de datos`)
    }
}

const existeEmail = async(correo='')=>{
 const emailExiste = await Usuario.findOne({correo});
if (emailExiste){ 
  throw new Error(`Este correo: ${correo}, ya está registrado`)
}}

module.exports = {rolValido, existeEmail}