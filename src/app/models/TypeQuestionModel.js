const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TypeQuestionModel = new Schema({
    _id: Schema.Types.ObjectId,
    nameType: { type: String },
    descriptionType: { type: String }
})

module.exports = mongoose.model('TypeQuestionModel', TypeQuestionModel)
