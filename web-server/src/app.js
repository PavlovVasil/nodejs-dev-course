const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Sofiq'
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})