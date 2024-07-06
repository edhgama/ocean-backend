const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const app = express()

const dbUrl = 'mongodb+srv://admin:5gFrtW482QtR1Ved@cluster0.wcxdeox.mongodb.net'
const dbName = 'ocean-jornada-backend'

const client = new MongoClient(dbUrl)

async function main() {
  console.log('Conectando banco de dados.')
  await client.connect()
  console.log('Banco de dados conectado.')



  app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.get('/oi', function (req, res) {
    res.send('Hello Worldddd 2')
  })


  //cria lista personagens
  const lista = ['Rick Sanches', 'Morty Smith', "Summer Smith"]
  //interacao com db
  const db = client.db(dbName)
  const collection = db.collection('item')


  // endpoint read all

  // GET /item
  app.get("/item", async function (req, res) {
    //obter registros da collection
    const documentos = await collection.find().toArray()

    res.send(documentos)
  })

  //definir json como padrao do body
  app.use(express.json())

  //create 
  app.post("/item", async function (req, res) {
    const item = req.body

    await collection.insertOne(item)

    res.send(item)
  })

  //read by id [GET] /item/:id
  //parametro de rota
  app.get('/item/:id', async function (req, res) {
    //recebe parametro da rota
    id = req.params.id;
    //acess db
    const item = await collection.findOne({ _id: new ObjectId })
    res.send(item)
  })

  //update by id - [PUT] /item/id

  app.put('/item/:id', async function (req, res) {
    const id = req.params.id
    const novoItem = req.body

    //atualiza item no id
    await collection.updateOne({_id: new ObjectId(id) }, {$set: novoItem } 
    )

  res.send('Item atualizado! ' + id)
})


app.listen(3000)
}

main()