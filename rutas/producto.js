const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaproducto = new eschema({
    producto: String,
    precio: Number,
    categoria: String,
    idProducto: String
})

const ModeloProducto = mongoose.model('productos', eschemaproducto)
module.exports = router

// ruta de prueba 
// router.get('/ejemplo', (req, res) => {
//     res.end('lu capa')
// })


// agregar usuarios
router.post('/agregarproducto', (req, res) => {
    const nuevoproducto = new ModeloProducto({
        producto: req.body.producto,
        precio: req.body.precio,
        categoria: req.body.categoria,
        idproducto: req.body.idproducto
    })
    nuevoproducto.save()
    .then(result =>{
        res.send('producto agregado correctamente');
    })
    .catch(error=>{
        res.send(error);
    });
    })

// obtener todos los usuarios
router.get('obtenerproductos', (req, res) => {
    ModeloProducto.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

// obtener data de usuario
router.post('obtenerdataproducto', (req, res) => {
    ModeloProducto.find({idproducto:req.body.idproducto}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


// actualizar usuario
router.post('/actualizaproducto', (req, res) => {

    ModeloProducto.findOneAndUpdate({idproducto:req.body.idproducto}, {
        producto: req.body.producto,
        precio: req.body.precio,
        categoria: req.body.categoria
    }, (err) => {
        if(!err){
            res.send()
        }else{
            res.send('producto actualizado correctamente')
        }
    })
})

// borrar producto
router.post('/borrarproducto', (req, res) => {

    ModeloProducto.findOneAndDelete({idproducto:req.body.idproducto}, (err) => {
        if(!err){
            res.send()
        }else{
            res.send('producto borrado correctamente')
        }
    })
})