const jwt = require('jsonwebtoken'); 
require('dotenv').config();

module.exports = (req, res, next) => { 
    try {
        console.log(req.headers)
        const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, 'process.env.DB_TOKEN');
        const userId = decodedToken.userId; 
        req.decodedToken = decodedToken
        if (req.body.userId && req.body.userId !== userId) { // Si l'userId du corps de la requête est différent de userId //
            throw 'User ID non valable'; 
        } else {
            next();
        }
    } catch(error) {
        res.status(401).json({ error });
    }
};