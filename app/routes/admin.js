const { check } = require('express-validator')

const AdminController = require('../controllers/admin')

module.exports = function(application){
	application.get('/sendNews', AdminController.renderForm)

	application.post('/sendNews/salvar', [
		check('titulo', 'Titulo não pode ser vazio').isLength({min: 10, max: 50}),
		check('resumo', 'Resumo tem que estar entre 30 e 100 caracteres').isLength({min: 30, max: 100}),
		check('data_noticia', 'Data informada de maneira errada').toDate({formart: 'YYYY-MM-DD'}),
		check('autor', 'Nome de autor inválido').isLength({min: 10, max: 30}),
		check('conteudo', 'O conteúdo precisa ter no mínimo 100 caracteres').isLength({min: 100})
	], AdminController.saveNews)
}