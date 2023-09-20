const HomeController = require("../app/controllers/HomeController");

const router = require("express").Router();


router.get('/', HomeController.index);
router.post("/",HomeController.postText);

module.exports = router;