
require('dotenv').config()
const express = require('express')
const indexRoute = require('./routes/index')
const projectsRoute = require('./routes/projects')
const port = 5000

module.exports = express()
  .set('view engine', 'ejs')
  .set('views', './views')

  .use(express.static('./public'))

  .use('/', indexRoute)
  .use('/projects', projectsRoute)
  // .use(errorRoute)
  .listen(port, server)

function server() {
  console.log('The server is running succesfully! 🎉 at https://http://localhost:5000/');
}
