const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const db = require('./models');

const userRoutes = require("./routes/user"); 
const messageRoutes = require("./routes/message"); 
const answerRoutes = require("./routes/answer"); 
db.sequelize
    .authenticate()
    .then(() => {
        console.log('connexion à la base de données');
        db.sequelize.sync({
            /* force:true */
        })
    })
    .catch(error => {
        console.log(error);
    });



const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Liste requêtes autorisées //
    next();
});

app.use(bodyParser.json()); 
app.use(helmet());
app.use('/images', express.static(path.join(__dirname, 'images'))); 

app.use('/api/auth', userRoutes);
app.use('/api/messages', messageRoutes); 
app.use('/api/answers', answerRoutes); 


module.exports = app; 