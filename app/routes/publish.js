const { check } = require('express-validator')

const PublishController = require('../controllers/publicacoes')

module.exports = (application) => {
	application.get('/publish/:id', PublishController.loadNew)

	application.get('/publications', PublishController.loadNews)

	application.get('/edit/:id', PublishController.edit)

	application.post('/edit/:id', PublishController.update)
}