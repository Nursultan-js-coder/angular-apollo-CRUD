const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');
const  config = require('config');
const SECRET_KEY = config.get("jwtSecret");

module.exports = (context) => {
    // context = { ... headers }
    console.log(SECRET_KEY);
    const authHeader = context.req.headers['x-auth-token'];
    console.log("token:",context.req.headers['x-auth-token']);
    console.log("Content-type:",context.req.headers["Content-Type"]);
    if (authHeader) {
        const token = authHeader;
        if (token) {
            try {
                const user = jwt.verify(token, SECRET_KEY);
                return user;
            } catch (err) {
                throw new AuthenticationError('Invalid/Expired token');
            }
        }
        throw new Error("Authentication token must be 'Bearer [token]");
    }
    throw new Error('Authorization header must be provided');
};
