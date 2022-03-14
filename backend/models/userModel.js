const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Agregar un nombre']
    },
    email: {
        type: String,
        required: [true, 'Agregar un email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Agregar una contraseña']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)