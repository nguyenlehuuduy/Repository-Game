const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const RoundModel = new Schema({
    _id: Schema.Types.ObjectId,
    nameRound: { type: String },
    descriptionRound: { type: String },
    conditionWinning: {type: String},
    conditionLevel: {Type: Number},
})

module.exports = mongoose.model('RoundModel', RoundModel)
