// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'qwerty1234';

function verifyToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')?.at(1);

    if (token == undefined) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.username = decoded.username;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

// module.exports = verifyToken;
export default verifyToken;