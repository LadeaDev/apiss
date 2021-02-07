import express from 'express';
import Datastore from 'nedb';
import cors from 'cors'
const app = express();
app.use(cors())
app.listen(3000);
const Database = new Datastore("database.db");

Database.loadDatabase();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello")
})

app.post('/db', (req, res) => {
    const body = req.body;

    Database.insert(body)
})

app.get('/db2', (req, res) => {
    Database.find({}, (err, data) => {
        res.send(data)
    })
})