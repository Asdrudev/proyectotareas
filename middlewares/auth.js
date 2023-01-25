const User = require('../models/user');
const jwt = require('jsonwebtoken');


//Funcion siempre es la misma verificar el usuario y luego pasar al controlador

const userExtractor = async (request, response, next) => {
    const authorization = request.cookies.accessToken;
    if (!authorization) {
        return response.sendStatus(401);
    }

    const decodedToken = jwt.verify(authorization, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken.id);
    request.user = user;
    return next();
};

module.exports = userExtractor; 
