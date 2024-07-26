const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {

    app.use('/news', newsRouter)
    //thằng nào dùng /news thì đi qua file news.js đã định nghĩa sẵn các tuyến đường

    app.use('/', siteRouter)
    app.use('/', siteRouter)
}

module.exports = route