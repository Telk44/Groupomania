const jwt = require('jsonwebtoken'); 

module.exports = (req, res, next) => { 
    try {
        console.log(req.headers)
        const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
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