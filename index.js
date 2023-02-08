const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const taskController = require('./task/TaskController');
const PORT = 8080;
const session = require('express-session');

app.use(session({
    secret: "secret",
    cookie: {
         
    }
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

///http://api.com/api/v1/

app.use('/', taskController);

app.get('/', (req, res) => {
    if(!req.session.user){

    }
})

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));