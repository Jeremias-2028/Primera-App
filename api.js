const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://Jeremias:eljerepro1234@cluster0.m9chg.mongodb.net/miapp?retryWrites=true&w=majority')


app.get('/users', user.list)

app.post('/users', user.create)

app.get('/users/:id', user.get)

app.put('/users/:id', user.update)

app.patch('/users/:id', user.update)

app.delete('/users/:id', user.destroy)

app.use(express.static('app'))
app.get('/', (req,res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
  res.status(404).send('Esta página no existe')
})

app.listen(port, () => {
  console.log('Conect on port 3000')
})
