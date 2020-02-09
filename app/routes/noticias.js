const {check, validationResult } = require('express-validator')

module.exports = (application) => {
	application.get('/noticia/:id', (req, res) => {
		application.app.controllers.publicacoes.loadNew(application, req, res)
	})

	application.get('/noticias', (req, res) => {
		application.app.controllers.publicacoes.listNews(application, req, res)
	})

	application.get('/edit/:id', (req, res) =>{
		application.app.controllers.publicacoes.edit(application, req, res)
	})

	application.post('/editNew/:id', [
		check('titulo', 'Titulo não pode ser vazio').isLength({min: 10, max: 50}),
		check('resumo', 'Resumo tem que estar entre 30 e 100 caracteres').isLength({min: 30, max: 100}),
		check('data_noticia', 'Data informada de maneira errada').toDate({formart: 'YYYY-MM-DD'}),
		check('autor', 'Nome de autor inválido').isLength({min: 10, max: 30}),
		check('conteudo', 'O conteúdo precisa ter no mínimo 100 caracteres').isLength({min: 100})
	], (req, res) => {
		application.app.controllers.publicacoes.editNew(application, req, res, validationResult(req))
	})
}