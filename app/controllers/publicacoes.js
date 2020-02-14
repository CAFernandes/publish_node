const axios = require('axios')
const { validationResult } = require('express-validator')

module.exports = {

  async loadNews (req, res) {
    try {
      let response = await axios.get('http://localhost:3013/api/publish')
      res.render('./publicacao/publications', { publish: response.data.results })
    } catch (error) {
      res.render('./master/error', {error: error})
    }    
  },

  async loadNew (req, res){
    try {
      let response = await axios.get(`http://localhost:3013/api/publish/${req.params.id}`)
      res.render('./publicacao/publish', { publish: response.data.results })
    } catch (error) {
      res.render('./master/error', {error: error})
    }
  },
  
  async edit (req, res) {
    await axios({
      method: 'get',
      url   : `http://localhost:3013/api/publish/${req.params.id}`
    })
      .then ( response => {
        res.render('./admin/editNew', { publish: response.data.results, error: {} })
      })
      .catch ( error => {
        res.render('./master/error', { error: error })
      })
  },

  async update (req, res){
    await axios({
      method: 'put',
      url   : `http://localhost:3013/api/publish/${req.params.id}`,
      data  : req.body
    })
      .then ( response => {
        if(response.status)
        {
          res.redirect(`../publish/${req.params.id}`)
        } else {
          res.render('../views/pages/master/error.ejs')
        }
      })
      .catch ( error => {
        res.render('./master/error', { error: error })
      })
    
  }

}
