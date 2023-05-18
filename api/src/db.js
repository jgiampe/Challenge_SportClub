
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/sportclub'

mongoose.connect(url)
.then(()=>console.log("Conectado a MongoDB"))
.catch((e)=>console.log(e));

const usuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true,
    unique: true,
  },
  nacimiento: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  celular: {
    type: Number,
    required: true,
    min: [1100000000, "Número de telefono inválido"],
    max: [9999999999, "Número de telefono inválido"]
  },
},
{
  versionKey:false,
})

const Usuario = mongoose.model('usuarios', usuarioSchema)

module.exports = Usuario