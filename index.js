const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
  res.send('Hello Worldddd 2')
})

//cria lista personagens
const lista = ['Rick Sanches','Morty Smith', "Summer Smith"]

// endpoint read all
// GET /item
app.get("/item", function(req,res){
  res.send(lista)
} )

//definir json como padrao do body
app.use(express.json())

//create 
app.post("/item", function(req,res){ 
  const item = req.body.nome 
  
  lista.push(item)

  res.send('criado com sucesso.') 
} )

//read by id [GET] /item/:id
//parametro de rota
app.get('/item/:id', function(req,res){
  //recebe parametro da rota
  id = req.params.id; 
  item = lista[id - 1];
  
  res.send(item)
})

//update by id - [PUT] /item/id

app.put('/item/:id', function(req,res){
  const id = req.params.id
  const novoItem = req.body.nome
  
  //atualiza item no id
  lista[id-1] = novoItem

  res.send('Item atualizado! '+ id)
})


app.listen(3000)