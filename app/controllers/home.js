module.exports.index = (application, req, res) =>{
  let conn        = application.db.connection()
  let NewsDao = new application.db.models.NewsDao(conn);

  NewsDao.getLastNews((error, response)=>{
    if(error) {
      res.render('./master/error', {error: error})
      return
    }
    res.render('./master/index', {noticias: response})
  })
}