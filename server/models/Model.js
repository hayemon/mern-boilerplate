const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    field: {
        type: String,
        required: true
    }
})

module.exports = Model = mongoose.model('model', ModelSchema)