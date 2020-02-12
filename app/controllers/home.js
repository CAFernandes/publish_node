const axios = require('axios')

module.exports = {
  async index ( req, res ) {
    try{
      let response = await axios.get(`http://localhost:3013/api/publish/index`)
      res.render('./master/index', { publish: response.data.results })
    } catch ( error ) {
      res.render('./master/error', { error: error })
    }
  }
}