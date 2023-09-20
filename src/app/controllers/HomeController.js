// Constants
const logger = require('../constants/loggerConstant');

class HomeController {
    async index(req, res, next) {
        res.status(200).json({
            question: [{
                question: "1 + 1 = ?",
                answer: "2"
            }, {
                question: "2 + 1 = ?",
                answer: "3"
            }
            ]
        })
    }
    async postText(req, res, next){
        res.setHeader("Content-Type", "text/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        if(req){
            console.log(req.body);
            res.status(200).json(req.body);
        }
    }
}
module.exports = new HomeController();
