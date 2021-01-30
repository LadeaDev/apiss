import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import Fruits from './Fruits.js'

// ae5VrpeyUTndI8cs

// mongodb+srv://daniel:ae5VrpeyUTndI8cs@cluster0.asobh.mongodb.net/<dbname>fruitdb?retryWrites=true&w=majority
const app = express();
app.use(cors())

app.use(express.json())



mongoose.connect('mongodb+srv://daniel:ae5VrpeyUTndI8cs@cluster0.asobh.mongodb.net/<dbname>fruitdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
app.listen(3000, () => {
    console.log("Server is up")
})

app.post('/api', (req, res) => {
   
    const fruit = req.body
     console.log(fruit)
    Fruits.create(fruit, (err, data) => {
        if (err){
            res.send(err)
        } else {
            res.send(data)
        }
    })
})
app.get('/api', (req, res) => {
   

     
    Fruits.find((err, data) => {
        if (err) {
            res.send("ERROR")
        } else {
            res.send(data)
        }
    })
})
app.get('/', (req, res) => {
   
  res.send("Hello")
})