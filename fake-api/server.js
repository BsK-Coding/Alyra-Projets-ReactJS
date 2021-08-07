const jsonServer = require("json-server")

const server = jsonServer.create()
const router = jsonServer.router("./database.json")

server.use(jsonServer.bodyParser)
server.use(jsonServer.defaults())

server.use(router)

server.listen(process.env.PORT || 4000, () => {
  console.log(`Run Auth API Server :${process.env.PORT || 4000}`)
})
