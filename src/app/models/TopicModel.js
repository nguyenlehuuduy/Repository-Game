const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TopicModel = new Schema({
    _id: Schema.Types.ObjectId,
    nameTopic: { type: String },
    descriptionTopic: { type: String },
    idRound: {
        type:  Schema.Types.ObjectId,
        ref: 'Round'
    },
})

module.exports = mongoose.model('TopicModel', TopicModel)
