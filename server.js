global.fetch = require("node-fetch");
const express = require('express');
const Unsplash = require('unsplash-js').default;
const jsonData = require('unsplash-js').toJson;
const path = require('path');
const PORT = process.env.PORT || 4000;

const unsplash = new Unsplash({
    accessKey: process.env.APPLICATION_ID || "53cdbf632f3386e7cabb496aba7fc5870972dd123754b1ad4721427fc417a5d7",
    secret: process.env.SECRET || "b42391bd46f1121a02dc2450971808bf7c900c95896452613e31eb59487f0b8b",
    callbackUrl: process.env.CALLBACK_URL || "http://localhost:3000"
})
const app = express();
app.get('/api/photos', (req, res) => {
    unsplash.photos.listPhotos(req.query.first, req.query.last)
        .then(jsonData).then(data => res.json(data));

})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('unsplash/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'unsplash', 'build', 'index.html'));
    })
}
app.listen(PORT, () => console.log(`Server start on ${PORT}`));