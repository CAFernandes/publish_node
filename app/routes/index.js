const HomeController = require('../controllers/home')

module.exports = function(application){
	application.get('/', HomeController.index)
}