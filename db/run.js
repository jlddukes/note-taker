const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

