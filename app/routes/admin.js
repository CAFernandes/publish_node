const {check, validationResult } = require('express-validator')

module.exports = function(application){
	application.get('/sendNews', (req, res) => {
		application.app.controllers.admin.renderForm(application, req, res)
	})

	application.post('/sendNews/salvar', [
		check('titulo', 'Titulo não pode ser vazio').isLength({min: 10, max: 50}),
		check('resumo', 'Resumo tem que estar entre 30 e 100 caracteres').isLength({min: 30, max: 100}),
		check('data_noticia', 'Data informada de maneira errada').toDate({formart: 'YYYY-MM-DD'}),
		check('autor', 'Nome de autor inválido').isLength({min: 10, max: 30}),
		check('conteudo', 'O conteúdo precisa ter no mínimo 100 caracteres').isLength({min: 100})
	], (req, res) => {
		application.app.controllers.admin.saveNews(application, req, res, validationResult(req))
	})
}