const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const loginRouter = require('./routes/routeConnexion.js');
const projectRouter = require('./routes/routeProjet.js');

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use(express.json());

app.use(loginRouter);

app.use(projectRouter);



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);

});


mongoose
    .connect(process.env.DB_URL, {})
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log(err.message));