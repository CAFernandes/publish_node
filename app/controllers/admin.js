const { validationResult } = require('express-validator')
const axios = require('axios')

module.exports = {
  async saveNews (req, res) {
    await axios({
      url   : 'http://localhost:3013/api/publish/',
      method: 'post',
      data  : req.body
    })
      .then ( response => {
        res.render('./publicacao/noticias')
      })
      .catch ( error => {
        res.render('./master/error', { error: error })
      })
  },

  async renderForm (req, res) {
    await res.render('./admin/sendNew', {validacao: {}, noticia: {}})
  }
}