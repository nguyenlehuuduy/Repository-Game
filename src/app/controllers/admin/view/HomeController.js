class HomeController {
    async index(request, response, next) {
        response.render('adm-home', { layout: 'main_layout.hbs' })
    }
    async login(request, response, next) {
        response.render('adm-login', { layout: 'blank_layout.hbs' })
    }
    async questionInformation(request, response, next) {
        response.render('adm-question-information', { layout: 'main_layout.hbs' })
    }
    async round(request, response, next) {
        response.render('adm-round', { layout: 'main_layout.hbs' })
    }
    async subjectQuestion(request, response, next) {
        response.render('adm-topic-question', { layout: 'main_layout.hbs' })
    }
}
module.exports = new HomeController;