const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    min_density: {type: Number, require: true},
    max_density: {type: Number, require: true},
    min_strength: {type: Number, require: true},
    max_strength: {type: Number, require: true}
});

module.exports = mongoose.model("material", schema);