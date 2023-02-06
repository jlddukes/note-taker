const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
    //read the db.json file and return all saved notes as JSON
});

app.post('/api/notes', (req, res) => {
    //add it to the db.json
    //return to the client
});



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

