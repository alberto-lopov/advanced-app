import jwt from 'jsonwebtoken';

//Middleware for authenticate JWT
export function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) return res.status(401).send('Error 401: Unauthorized Access');

   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
       if(err) return res.status(403).send('Error 403: Not valid JWT token');

       //We have valid token
       req.user = user;
       next();
   }) 

}