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


app.listen(3000)