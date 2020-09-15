const express = require('express');
const app = express();
const userRoutes = require('./api/routes/user');
const artistRoutes = require('./api/routes/artist');
const PORT = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors({origin:true}))
app.get('/check', (req, res) =>
    res.send("bye")
)
app.use(express.json());
app.use('/user', userRoutes)
app.use('/artist', artistRoutes)
app.listen(PORT, () => console.log('listening on port 3000'))

