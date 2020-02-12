const { check } = require('express-validator')

const PublishController = require('../controllers/publicacoes')

module.exports = (application) => {
	application.get('/noticia/:id', PublishController.loadNew)

	application.get('/noticias', PublishController.loadNews)

	application.get('/edit/:id', PublishController.edit)

	application.post('/edit/:id', PublishController.update)
}