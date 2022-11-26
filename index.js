const express = require("express")
const path = require("path")
const {createServer} = require("http")
const {getIO, initIO} = require("./socket")


const app = express()

const PORT = process.env.PORT || 4001

app.use('/', express.static(path.join(__dirname, 'static')))

const httpServer = createServer(app)

initIO(httpServer)

httpServer.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`))

getIO()