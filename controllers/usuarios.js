const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {


    const {q, nombre = 'No name', apiKey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apiKey,
        page,
        limit
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: "put API",
        id
    })
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: "post API",
        nombre,
        edad
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: "delete API"
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        ok: true,
        msg: "patch API"
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}