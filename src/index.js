const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

const route = require('./routes')

//middleware xử lý thông tin được gửi serve
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//http logger
// app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//Route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})