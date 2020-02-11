const { check } = require('express-validator')

const PublishController = require('../controllers/publicacoes')

module.exports = (application) => {
	application.get('/noticia/:id', PublishController.loadNew)

	application.get('/noticias', PublishController.loadNews)

	application.get('/edit/:id', PublishController.edit)

	application.post('/editNew/:id', [
		check('titulo', 'Titulo não pode ser vazio').isLength({min: 10, max: 50}),
		check('resumo', 'Resumo tem que estar entre 30 e 100 caracteres').isLength({min: 30, max: 100}),
		check('data_noticia', 'Data informada de maneira errada').toDate({formart: 'YYYY-MM-DD'}),
		check('autor', 'Nome de autor inválido').isLength({min: 10, max: 30}),
		check('conteudo', 'O conteúdo precisa ter no mínimo 100 caracteres').isLength({min: 100})
	], PublishController.editNew)
}