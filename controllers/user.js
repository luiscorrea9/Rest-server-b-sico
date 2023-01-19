const { response } = require('express')


const usuariosGet = (req, res = response) => {
    res.json({
        msj: 'get API - controlador'
    })
  }

const usuariosPost = (req, res = response) => {
    res.json({
        msj: 'post API - usuariosPost'
    })
  }

const usuariosPut = (req, res = response) => {
    res.json({
        msj: 'put API - usuariosPut'
    })
  }

const usuariosPatch = (req, res = response) => {
    res.json({
        msj: 'patch API - usuariosPatch'
    })
  }

const usuariosDelete = (req, res = response) => {
    res.json({
        msj: 'delete API - usuariosDelete'
    })
  }



  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
  }