const express = require('express')
const serve = require('serve-static')
const port = 80

const app = express()
app.use(serve(__dirname + '/../dist'))

const apiRouter = express.Router()
apiRouter.get('/what-can-we-do', (req, res) => {
    res.send('LK 2.0!!!!!!!!!')
})

app.use('/api', apiRouter)

app.listen(port, 'localhost',() => {
    console.log(`Example app with port mazafaka ${port}`)
})
