const HomeController = require("../app/controllers/admin/view/HomeController");
const AuthController = require("../app/controllers/admin/api/AuthController");
const MiddleWareController = require("../app/middlewares/MiddlewareController");
const QuestionController = require("../app/controllers/admin/api/QuestionController");

const router = require("express").Router();

//API
//middle MiddleWareController.verifytoken ware check token in header
router.get('/get-all', MiddleWareController.verifytoken, (req, res, next) => {
    res.send('text json web token');
})

//refresh token
// router.post('/resfresh-token', AuthController.refreshToken);

//GET All Questions
router.get('/all-questions', MiddleWareController.verifytoken , QuestionController.getAllQuestion)
//GET One Question
router.get('/get-question/:id', MiddleWareController.verifytoken , QuestionController.getQuestionById )
//Add new Question
router.get('/add-new-question' , MiddleWareController.verifytoken , QuestionController.addNewQuestion)
//Update Question
router.get('/update-question' , MiddleWareController.verifytoken , QuestionController.updateQuestion)
//delete Question
router.get('/delete-question' , MiddleWareController.verifytoken , QuestionController.deleteQuestion) 

//VIEW
router.get('/login', HomeController.login);
router.post('/authen', AuthController.index);

router.get('/',MiddleWareController.verifytoken,  HomeController.index);
router.get('/question-information',MiddleWareController.verifytoken,  HomeController.questionInformation);
router.get('/round',MiddleWareController.verifytoken,  HomeController.round);
router.get('/topic-question',MiddleWareController.verifytoken,  HomeController.subjectQuestion);




module.exports = router;