const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Agregar un campo de texto']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)