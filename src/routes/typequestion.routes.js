const router = require("express").Router();
const mongoose = require("mongoose")
const Typequestion = require('../app/models/TypeQuestionModel')


router.get('/', async (req, res) => {
    try{
        const typequestions = await Typequestion.find()
        res.json(typequestions)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.get('/:id',getTypeQuestion, (req, res) => {
    res.send(res.typequestion);
})

router.post('/', async (req, res) => {
    const typequestion = new Typequestion({
        _id: new mongoose.Types.ObjectId(), 
        nameType : req.body.nameType,
        descriptionType : req.body.descriptionType,
    })
    try {
        const newTypeQuestion = await typequestion.save();
        res.status(201).json(newTypeQuestion)
    } catch (error) {
        res.status(400).json({message: error.message});
    }

})
router.patch('/:id', getTypeQuestion, async (req, res) => {
    if (req.body.nameType != null) {
        res.typequestion.nameType = req.body.nameType;
    }
    if (req.body.descriptionType != null) {
        res.typequestion.descriptionType = req.body.descriptionType;
    }
    try {
        const updatedTypeQuestion = await res.typequestion.save();
        res.json(updatedTypeQuestion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// router.patch('/:id', getTypeQuestion ,async (req, res) => {
//     if(req.body.nameType != null){
//         res.typequestion.nameType = req.body.nameType;
//     }
//     if(req.body.descriptionType != null){
//         res.typequestion.descriptionType = req.body.descriptionType;
//     }
//     try {
//         const updatedTypeQuestion = await res.typequestion.save({_id: req.params.id});
//         res.json(updatedTypeQuestion);
//     } catch (error) {
//         res.status(400).json({message: error.message});
//     }

// })

router.delete('/:id', getTypeQuestion, async (req, res) => {
    try {
        await Typequestion.deleteOne({_id: req.params.id})
        res.json({message: "Delete TypeQuestion success"})
    } catch (error) {
        res.status(500).json({message: error.message})        
    }
})

async function getTypeQuestion(req, res , next ){
    let typequestion
    try {
        typequestion = await Typequestion.findById(req.params.id);
        if(typequestion == null){
          return  res.status.json({message: " Can't find typequestion"})
        }
    } catch (error) {
        return res.status(400).json({ message: error.message})
    }
    res.typequestion = typequestion
    next()
}


module.exports = router;