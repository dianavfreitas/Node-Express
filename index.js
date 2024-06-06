const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let db = [];

//Get 
app.get('/api/data', (req, res) => {
    setTimeout(() => {
        res.json(db);
    }, 1000);
});

//Post
app.post('/api/data', (req, res) => {
    const newData = req.body;
    setTimeout(() => {
        db.push(newData);
        res.status(201).send('Data added successfully');
    }, 1000);
});

//Put
app.put('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updateData = req.body;

    setTimeout(() => {
        const index = db.findIndex(item => item.id === id);
        if(index !== -1){
            db[index] = updateData;
            res.send('Data updated successfully');
        } else {
            res.statuss(404).send('Data not found');
        }
    }, 1000);
});

//Delete
app.delete('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);

    setTimeout(() => {
        const index = db.findIndex(item => item.id === id);
        if(index !== -1){
            db.splice(index, 1);
            res.send('Data deleted successfully');
        } else {
            res.status(404).send('Data not found');
        }
    }, 1000);
});
