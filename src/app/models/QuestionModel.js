const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Question = new Schema({
    _id: Schema.Types.ObjectId,
    content: {
        decription: {type: String},
        imagePath: {type: String}
    },
    answer: {type: String},
    option: [
        {st_option: {type: String} }
    ],
    type: {
        idType: {
            type:  Schema.Types.ObjectId,
            ref: 'TypeQuestion'
        },
        typeName: {Type: String}
    },
    topic:{
        idTopic: {
            type:  Schema.Types.ObjectId,
            ref: 'Topic'
        },
    }


}, { timestamps: true })

module.exports = mongoose.model('Question', Question)

