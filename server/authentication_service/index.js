

const express = require('express')
const app = express();
const dbConnection = require('./database/connectDb');
const indexRouter = require('./routes/index')
const router = require('./routes/index');



dbConnection.connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(3000, () => {
    console.log('listening on port 3000')
});