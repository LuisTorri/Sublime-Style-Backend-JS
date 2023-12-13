const express = require('express')
const app = express()

// importar conexion mongoDB
const archivoBD = require('./conexion')

// importacion del archivo de rutas y modelo producto
const rutaproducto = require('./rutas/producto')

// importar bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))



app.use('/api/producto', rutaproducto)

app.get('/', (req, res) => {
    res.end('Bienvenidos')
})

//Configurar server

app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente')
})