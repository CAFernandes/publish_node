module.exports.renderForm = (application, req, res) => {
  res.render('./admin/sendNew', {validacao: {}, noticia: {}})
}
module.exports.saveNews = (application, req, res, errors) => {
  if(!errors.isEmpty()){
    res.render('./admin/sendNew', {validacao: errors.errors, noticia: req.body})
    return
  }
    
  let connection  = application.db.connection()
  let NewsDao = new application.db.models.NewsDao(connection);

  NewsDao.insertNew(req.body, function(error, results, fields){
    if (error) res.render('./master/error', {error: error})
    else res.redirect('./publicacao/noticias')
  })
}