const express = require('express')
const consign = require('consign')
const body    = require('body-parser')
const path    = require('path')
const app     = express()

app.set('view engine', 'ejs')
app.set('views', './app/views/pages')

app.use(express.static(path.join(__dirname, '../app/assets')))
app.use(body.urlencoded({extended: true}))

consign()
  .include('./app/controllers')
  .then('./app/routes')
  .then('./db/connection.js')
  .then('./db/models')
  .into(app)

module.exports = app