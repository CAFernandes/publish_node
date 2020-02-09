module.exports.loadNew = (application, req, res) => {
  let id          = req.params.id
  let connection  = application.db.connection()
  let NewsDao = new application.db.models.NewsDao(connection)

  NewsDao.getNew(id, (error, results, fields) =>{
    if (error) res.render('./admin/error', {error: error})
    else res.render('./publicacao/noticia', {noticia: results})
  })
}

module.exports.listNews = (application, req, res) => {
  let connection  = application.db.connection()
	let NewsDao = new application.db.models.NewsDao(connection)

	NewsDao.getNews((error, results, fields) => {
    if (error) res.render('./admin/error', {error: error})
    else res.render('./publicacao/noticias', {noticias: results})
	})
}

module.exports.edit = (application, req, res) =>{
  let id          = req.params.id
  let connection  = application.db.connection()
  let NewsDao = new application.db.models.NewsDao(connection)

  NewsDao.getNew(id, (error, results, fields) =>{
    if (error) res.render('./admin/error', {error: error})
    else res.render('./admin/editNew', {publicacao: results})
  })
}

module.exports.editNew = (application, req, res, errors) => {
  if(!errors.isEmpty()){
    res.redirect(`../edit/${req.params.id}`)
    return
  }
  let connection = application.db.connection()
  let NewsDao = new application.db.models.NewsDao(connection)
  NewsDao.updateNews(req.body, req.params.id, (error, results, fields) => {
    if (error) {console.log(error); res.render('./master/error', {error: error})}
    else application.app.controllers.publicacoes.loadNew(application, req, res)
  })
}