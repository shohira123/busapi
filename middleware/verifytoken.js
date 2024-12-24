// function verifyToken(req, res, next) {
//     const bearerheader = req.headers['authorization'];
//     if (typeof bearerheader !== undefined) {

//     } else {
//         res.send({ msg: "token is not valid" });
//     }

// }

const jwt = require('jsonwebtoken');
// const secretKey = 'your-secret-key';
const privateKey = "mykey123";

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.send({ message: "Unauthorized", status: 401 })
        // return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, privateKey, (err, user) => {
        if (err) {
            return res.send({ message: "Forbidden", status: 403 })
            // return res.status(403).send(err);
            // return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;